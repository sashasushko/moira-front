// @flow

import type { Metrics } from './Metrics';
import type { Schedule } from './Schedule';

export type LastCheck = {|
    state: string;
    timestamp: number;
    metrics: Metrics;
    event_timestamp?: number;
    score: number;
    msg: string;
|};

export type Trigger = {|
    id: string;
    name: string;
    desc?: string;
    expression: string;
    warn_value: number;
    error_value: string;
    last_check: LastCheck;
    targets: Array<string>;
    ttl: number;
    ttl_state: string;
    patterns: Array<string>;
    tags: Array<string>;
    throttling: number;
    timestamp: number;
    is_simple_trigger: boolean;
    sched: Schedule;
|};

export type TriggerState = {|
    metrics: Metrics;
    timestamp: number;
    state: string;
    score: number;
    trigger_id: string;
|};
