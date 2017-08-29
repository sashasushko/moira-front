// @flow
import type { Config } from '../Domain/Config';
import type { EventList } from '../Domain/Event';
import type { Trigger, TriggerList, TriggerState } from '../Domain/Trigger';
import type { Settings } from '../Domain/Settings';
import type { TagList, TagStatList } from '../Domain/Tag';
import type { PatternList } from '../Domain/Pattern';
import type { NotificationList } from '../Domain/Notification';

export interface IMoiraApi {
    getPatternList(): Promise<PatternList>;
    getTagList(): Promise<TagList>;
    getTagStats(): Promise<TagStatList>;
    getSettings(): Promise<Settings>;
    getTriggerList(page: number, tags: string): Promise<TriggerList>;
    getTrigger(id: string): Promise<Trigger>;
    setMaintenance(triggerId: string, data: { [metric: string]: number }): Promise<number>;
    delMetric(triggerId: string, metric: string): Promise<number>;
    getTriggerState(id: string): Promise<TriggerState>;
    getTriggerEvents(id: string): Promise<EventList>;
    getNotificationList(): Promise<NotificationList>;
}

export default class Api implements IMoiraApi {
    config: Config;

    constructor(config: Config) {
        this.config = config;
    }

    getPatternList(): Promise<PatternList> {
        const url = `${this.config.apiUrl}/pattern`;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTagList(): Promise<TagList> {
        const url = `${this.config.apiUrl}/tag`;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTagStats(): Promise<TagStatList> {
        const url = `${this.config.apiUrl}/tag/stats`;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getSettings(): Promise<Settings> {
        const url = `${this.config.apiUrl}/user/settings`;
        return fetch(url, {
            method: 'GET',
            headers: { 'x-webauth-user': 'sushko' },
        }).then(response => response.json());
    }

    getTriggerList(page: number, tags: string): Promise<TriggerList> {
        const url = `${this.config.apiUrl}/trigger/page?p=${page}&size=${this.config.paging.triggerList}&${tags}`;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTrigger(id: string): Promise<Trigger> {
        const url = `${this.config.apiUrl}/trigger/${id}`;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    setMaintenance(triggerId: string, data: { [metric: string]: number }): Promise<number> {
        const url = `${this.config.apiUrl}/trigger/${triggerId}/maintenance`;
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
        }).then(response => response.status);
    }

    delMetric(triggerId: string, metric: string): Promise<number> {
        const url = `${this.config.apiUrl}/trigger/${triggerId}/metrics?name=${metric}`;
        return fetch(url, {
            method: 'DELETE',
        }).then(response => response.status);
    }

    getTriggerState(id: string): Promise<TriggerState> {
        const url = `${this.config.apiUrl}/trigger/${id}/state`;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTriggerEvents(id: string): Promise<EventList> {
        const url = `${this.config.apiUrl}/event/${id}?p=0&size=${this.config.paging.eventHistory}`;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getNotificationList(): Promise<NotificationList> {
        const url = `${this.config.apiUrl}/notification?start=0&end=-1`;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }
}
