// @flow
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
    getPatternList(): Promise<PatternList> {
        const url = '/api/pattern';
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTagList(): Promise<TagList> {
        const url = '/api/tag';
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTagStats(): Promise<TagStatList> {
        const url = '/api/stats';
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getSettings(): Promise<Settings> {
        const url = '/api/settings';
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTriggerList(page: number): Promise<TriggerList> {
        const url = '/api/triggers?page=' + page;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTrigger(id: string): Promise<Trigger> {
        const url = '/api/trigger?id=' + id;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTriggerState(id: string): Promise<TriggerState> {
        const url = '/api/state?id=' + id;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTriggerEvents(id: string): Promise<EventList> {
        const url = '/api/events?id=' + id;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }
}
