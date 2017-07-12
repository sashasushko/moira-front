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
    name: string;
    desc?: string;
    expression: string;
    warn_value: number;
    error_value: ?number;
    last_check?: LastCheck;
    targets: Array<string>;
    ttl: number;
    ttl_state: string;
    patterns: Array<string>;
    tags: Array<string>;
    throttling: number;
    timestamp?: number;
    is_simple_trigger: boolean;
    sched: Schedule;
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
