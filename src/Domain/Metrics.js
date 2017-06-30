// @flow

export type Metric = {|
    state: string;
    timestamp: number;
    suppressed: boolean;
    event_timestamp?: number;
    value?: number;
    maintenance?: number;
|};

export type Metrics = {|
    [metric: string]: Metric;
|};
