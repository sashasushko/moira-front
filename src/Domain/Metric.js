// @flow

export type MetricState = 'OK' | 'NODATA' | 'WARNING' | 'ERROR';

export type Metric = {|
    state: MetricState;
    timestamp: number;
    suppressed?: boolean;
    event_timestamp?: number;
    value?: number;
    maintenance?: number;
|};

export type MetricList = {
    [metric: string]: Metric;
};
