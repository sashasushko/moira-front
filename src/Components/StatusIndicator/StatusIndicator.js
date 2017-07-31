// @flow
import React from 'react';
import type { Status } from '../../Domain/Status';
import { getStatusColor } from '../../Domain/Status';

type Props = {|
    statuses: Array<Status>;
|};

export default function StatusIndicator(props: Props): React.Element<*> {
    const OPTIONS = {
        size: 20,
    };
    const { statuses } = props;

    function renderPath(): React.Element<*> {
        const [status1, status2, status3] = statuses;
        switch (statuses.length) {
            case 1:
                return <circle cx='0' cy='0' r='1' fill={getStatusColor(status1)} />;
            case 2:
                return (
                    <g>
                        <path d='M 1 0 A 1 1 0 0 1 -1 1.2246467991473532e-16 L 0 0' fill={getStatusColor(status1)} />
                        <path
                            d='M -1 1.2246467991473532e-16 A 1 1 0 0 1 1 -2.4492935982947064e-16 L 0 0'
                            fill={getStatusColor(status2)}
                        />
                    </g>
                );
            case 3:
                return (
                    <g>
                        <path
                            d='M 1 0 A 1 1 0 0 1 -0.48175367410171543 0.8763066800438635 L 0 0'
                            fill={getStatusColor(status1)}
                        />
                        <path
                            d='M -0.48175367410171543 0.8763066800438635 A 1 1 0 0 1 -0.48175367410171527 -0.8763066800438636 L 0 0'
                            fill={getStatusColor(status2)}
                        />
                        <path
                            d='M -0.48175367410171527 -0.8763066800438636 A 1 1 0 0 1 1 -2.4492935982947064e-16 L 0 0'
                            fill={getStatusColor(status3)}
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