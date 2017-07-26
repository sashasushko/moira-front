// @flow

import type { MetricList } from './Metric';
import type { Schedule } from './Schedule';

export type LastCheck = {|
    state: string;
    timestamp: number;
    metrics: MetricList;
    event_timestamp?: number;
    score: number;
    msg?: string;
|};

export type Trigger = {|
    id: string;
    is_simple_trigger: boolean;
    name: string;
    targets: Array<string>;
    tags: Array<string>;
    patterns: Array<string>;
    expression: string;
    ttl: number;
    ttl_state: string;
    throttling: number;
    sched: Schedule;
    desc?: string;
    warn_value: ?number;
    error_value: ?number;
    last_check?: LastCheck;
    timestamp?: number;
|};

export type TriggerState = {|
    metrics: MetricList;
    timestamp: number;
    state: string;
    score: number;
    trigger_id: string;
|};

export type TriggerList = {|
    total: number;
    page: number;
    size: number;
    list: Array<Trigger>;
|};
