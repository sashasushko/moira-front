// @flow
import React from 'react';
import type { Trigger } from '../../Domain/Trigger';
// import parseTimestamp from '../../Helpers/parseTimestamp';

type Props = {|
    data?: Trigger;
|};

export default function TriggerEditForm(props: Props): React.Element<*> {
    const { name, desc, targets = [''], error_value, warn_value, expression, ttl_state, ttl } = props.data
        ? props.data
        : {};
    return (
        <form>
            <p>
                <label htmlFor='name'>Name</label>
                <br />
                <input id='name' type='text' defaultValue={name} />
            </p>
            <p>
                <label htmlFor='descr'>Description</label>
                <br />
                <textarea id='descr' defaultValue={desc} />
            </p>
            <h3>Target</h3>
            {targets &&
                targets.map((target, i) => {
                    const number = i + 1;
                    return (
                        <p key={i}>
                            <label htmlFor={'target' + number}>
                                T{number}
                            </label>
                            <input id={'target' + number} type='text' defaultValue={target} />
                            {i > 0 && <button>−</button>}
                        </p>
                    );
                })}
            <p>
                <button>Add target</button>
            </p>
            <fieldset disabled={targets.length > 1}>
                <legend>Simple mode</legend>
                <p>
                    <span>Target</span>
                    <br />
                    <label>
                        <input type='radio' name='disrection' value='raising' defaultChecked />Raising
                    </label>
                    <label>
                        <input type='radio' name='disrection' value='falling' />Falling
                    </label>
                </p>
                <p>
                    WARNING <label htmlFor='target1warningIf'>if T1</label>{' '}
                    <input id='target1warningIf' type='text' defaultValue={warn_value} />
                </p>
                <p>
                    ERROR <label htmlFor='target1errorIf'>if T1</label>{' '}
                    <input id='target1errorIf' type='text' defaultValue={error_value} />
                </p>
            </fieldset>
            <fieldset>
                <legend>Advanced mode</legend>
                <p>
                    <label htmlFor='expression'>Python expression</label>
                    <br />
                    <input id='expression' type='text' defaultValue={expression} />
                </p>
            </fieldset>
            <p>
                <select value={ttl_state}>
                    <option value='OK'>OK</option>
                    <option value='WARN'>WARN</option>
                    <option value='ERROR'>ERROR</option>
                    <option value='NODATA'>NODATA</option>
                    <option value='DEL'>DEL</option>
                </select>{' '}
                <label htmlFor='target1anotherIf'>if has no vlue for</label>
                <input id='target1anotherIf' type='text' defaultValue={ttl} />
                <label htmlFor='target1anotherIf'>seconds</label>
            </p>
            <p>
                <label htmlFor='descr'>Watch time</label>
                <br />
                <label>
                    {/* <input type='checkbox' /> */}
                </label>
            </p>
            <button>Save</button>
            <button>Import</button>
            <button>Copy</button>
            <button>Delete</button>
        </form>
    );
}
