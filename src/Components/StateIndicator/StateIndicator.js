// @flow
import React from 'react';
import type { State } from '../../Domain/State';
import { getStateColor } from '../../Domain/State';

type Props = {|
    state: Array<State>;
|};

export default function StateIndicator(props: Props): React.Element<*> {
    const OPTIONS = {
        size: 20,
    };
    const { state } = props;

    function renderPath(): React.Element<*> {
        const [state1, state2, state3] = state;
        switch (state.length) {
            case 1:
                return <circle cx='0' cy='0' r='1' fill={getStateColor(state1)} />;
            case 2:
                return (
                    <g>
                        <path d='M 1 0 A 1 1 0 0 1 -1 1.2246467991473532e-16 L 0 0' fill={getStateColor(state1)} />
                        <path
                            d='M -1 1.2246467991473532e-16 A 1 1 0 0 1 1 -2.4492935982947064e-16 L 0 0'
                            fill={getStateColor(state2)}
                        />
                    </g>
                );
            case 3:
                return (
                    <g>
                        <path
                            d='M 1 0 A 1 1 0 0 1 -0.48175367410171543 0.8763066800438635 L 0 0'
                            fill={getStateColor(state1)}
                        />
                        <path
                            d='M -0.48175367410171543 0.8763066800438635 A 1 1 0 0 1 -0.48175367410171527 -0.8763066800438636 L 0 0'
                            fill={getStateColor(state2)}
                        />
                        <path
                            d='M -0.48175367410171527 -0.8763066800438636 A 1 1 0 0 1 1 -2.4492935982947064e-16 L 0 0'
                            fill={getStateColor(state3)}
                        />
                    </g>
                );
            default:
                return <g />;
        }
    }

    return (
        <svg viewBox='-1 -1 2 2' width={OPTIONS.size} height={OPTIONS.size} style={{ transform: 'rotate(-90deg)' }}>
            {renderPath()}
        </svg>
    );
}
