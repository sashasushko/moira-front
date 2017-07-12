// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { Trigger } from '../../Domain/Trigger';
import Tag from '../Tag/Tag';

type Props = {|
    data: Trigger;
|};

export default function TriggerInfo(props: Props): React.Element<*> {
    const { id, name, targets, desc, expression, warn_value, error_value, ttl_state, ttl, sched, tags } = props.data;
    return (
        <div>
            <h3>
                {name}
            </h3>
            <p>
                {id}
            </p>
            <p>
                <Link to={'/trigger/' + id}>Edit</Link> <button>Export</button>
            </p>
            <dl>
                <dt>
                    <i>Target</i>
                </dt>
                <dd>
                    {targets.map((target, i) =>
                        <div key={i}>
                            {target}
                        </div>
                    )}
                </dd>
                <dt>
                    <i>Description</i>
                </dt>
                <dd>
                    {desc}
                </dd>
                {/* TODO: скрыть валуй, если есть expression */}
                <dt>
                    <i>Value</i>
                </dt>
                <dd>
                    Warning: {warn_value}, Error: {error_value}, Set {ttl_state} if has no value for {ttl} seconds
                </dd>
                <dt>
                    <i>Expression</i>
                </dt>
                <dd>
                    {(!expression && '—') || expression}
                </dd>
                <dt>
                    <i>Schedule</i>
                </dt>
                <dd>
                    {sched.days.filter(item => item.enabled).map((item, i) =>
                        <span key={i}>
                            {i !== 0 && ', '}
                            {item.name}
                        </span>
                    )}
                </dd>
                <dt>
                    <i>Tags</i>
                </dt>
                <dd>
                    {tags.map((tag, i) => <Tag key={i} title={tag} />)}
                </dd>
            </dl>
        </div>
    );
}
