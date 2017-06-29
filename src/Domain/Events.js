// @flow

export type Event = {
    state: string;
    old_state: string;
    timestamp: number;
    value?: number;
    metric: string;
    msg: string;
    trigger_id: string;
};

export type Events = {
    total: number;
    list: Array<Event>;
    page: number;
    size: number;
};
