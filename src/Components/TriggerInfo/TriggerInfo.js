// @flow
import React from 'react';
import Button from 'retail-ui/components/Button';
import RouterLinkWithIcon from '../RouterLink/RouterLink';
import type { Trigger } from '../../Domain/Trigger';
import TagList from '../TagList/TagList';
import getJSONContent from '../../Helpers/getJSONContent';
import cn from './TriggerInfo.less';

type Props = {|
    data: Trigger;
|};

export default function TriggerInfo(props: Props): React.Element<*> {
    const {
        id,
        name,
        targets,
        desc,
        expression,
        error_value: errorValue,
        warn_value: warnValue,
        ttl_state: ttlState,
        ttl,
        sched,
        tags,
    } = props.data;
    return (
        <section className={cn('info')}>
            <div className={cn('container')}>
                <header className={cn('header')}>
                    <h2 className={cn('title')}>
                        {name}
                    </h2>
                    <div className={cn('controls')}>
                        <div className={cn('control')}>
                            <RouterLinkWithIcon to={'/trigger/' + id + '/edit'} icon='Edit'>
                                Edit
                            </RouterLinkWithIcon>
                        </div>
                        <div className={cn('control')}>
                            <a
                                href=''
                                onClick={(event: Event) =>
                                    event.currentTarget instanceof HTMLAnchorElement
                                        ? (event.currentTarget.href = getJSONContent(props.data))
                                        : null}
                                download={`trigger-${id}.json`}>
                                <Button use='link' icon='Export'>
                                    Export
                                </Button>
                            </a>
                        </div>
                    </div>
                </header>
                <dl className={cn('data')}>
                    <dt>Target</dt>
                    <dd>
                        {targets.map((target, i) =>
                            <div key={i}>
                                {target}
                            </div>
                        )}
                    </dd>
                    <dt>Description</dt>
                    <dd>
                        {desc}
                    </dd>
                    {!expression && <dt>Value</dt>}
                    {!expression &&
                        <dd>
                            Warning: {warnValue}, Error: {errorValue}, Set {ttlState} if has no value for {ttl} seconds
                        </dd>}
                    {expression && <dt>Expression</dt>}
                    {expression &&
                        <dd>
                            {expression}
                        </dd>}
                    <dt>Schedule</dt>
                    <dd>
                        {sched.days.filter(item => item.enabled).map((item, i) =>
                            <span key={i}>
                                {i !== 0 && ', '}
                                {item.name}
                            </span>
                        )}
                    </dd>
                    <dt>Tags</dt>
                    <dd>
                        <TagList tags={tags} />
                    </dd>
                </dl>
            </div>
        </section>
    );
}
