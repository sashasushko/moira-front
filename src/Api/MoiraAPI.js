// @flow
import type { Config } from '../Domain/Config';
import type { EventList } from '../Domain/Event';
import type { Trigger, TriggerList, TriggerState } from '../Domain/Trigger';
import type { Settings } from '../Domain/Settings';
import type { TagList, TagStatList } from '../Domain/Tag';
import type { PatternList } from '../Domain/Pattern';

export interface IMoiraApi {
    getPatternList(): Promise<PatternList>;
    getTagList(): Promise<TagList>;
    getTagStats(): Promise<TagStatList>;
    getSettings(): Promise<Settings>;
    getTriggerList(page: number): Promise<TriggerList>;
    getTrigger(id: string): Promise<Trigger>;
    getTriggerState(id: string): Promise<TriggerState>;
    getTriggerEvents(id: string): Promise<EventList>;
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
        const url = `${this.config.apiUrl}/stats`;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getSettings(): Promise<Settings> {
        const url = `${this.config.apiUrl}/user/settings`;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTriggerList(page: number): Promise<TriggerList> {
        const url = `${this.config.apiUrl}/trigger/page?p=${page}&size=${this.config.paging.triggerList}`;
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
}
