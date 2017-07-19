// @flow

import type { State } from './States';

export type Metric = {|
    state: State;
    timestamp: number;
    suppressed?: boolean;
    event_timestamp?: number;
    value?: number;
    maintenance?: number;
|};

export type MetricList = {
    [metric: string]: Metric;
};
