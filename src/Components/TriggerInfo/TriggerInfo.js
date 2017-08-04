// @flow
import React from 'react';
import Icon from 'retail-ui/components/Icon';
import Button from 'retail-ui/components/Button';
import { Link } from 'react-router-dom';
import type { Trigger } from '../../Domain/Trigger';
import Tag from '../Tag/Tag';
import cn from './TriggerInfo.less';

type Props = {|
    data: Trigger;
|};

export default function TriggerInfo(props: Props): React.Element<*> {
    const { id, name, targets, desc, expression, warn_value, error_value, ttl_state, ttl, sched, tags } = props.data;
    return (
        <section>
            <header className={cn({ header: true })}>
                <h2 className={cn({ title: true })}>
                    {name}
                </h2>
                <div className={cn({ controls: true })}>
                    <div className={cn({ control: true })}>
                        <Link to={'/trigger/' + id}>
                            <Icon name='Edit' /> Edit
                        </Link>
                    </div>
                    <div className={cn({ control: true })}>
                        <Button use='link' icon='Export'>
                            Export
                        </Button>
                    </div>
                </div>
            </header>

            <dl className={cn({ info: true })}>
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
                        Warning: {warn_value}, Error: {error_value}, Set {ttl_state} if has no value for {ttl} seconds
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
                    {tags.map((tag, i) => <Tag key={i} title={tag} />)}
                </dd>
            </dl>
        </section>
    );
}
