// @flow
import React from 'react';
import Icon from 'retail-ui/components/Icon';
import Button from 'retail-ui/components/Button';
import { Link } from 'react-router-dom';
import type { Trigger } from '../../Domain/Trigger';
import TagList from '../TagList/TagList';
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
                            <Link to={'/trigger/' + id}>
                                <Icon name='Edit' /> Edit
                            </Link>
                        </div>
                        <div className={cn('control')}>
                            <Button use='link' icon='Export'>
                                Export
                            </Button>
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
