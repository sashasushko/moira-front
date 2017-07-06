// @flow
import type { Events } from '../Domain/Events';
import type { Trigger, TriggerList, TriggerState } from '../Domain/Trigger';
import type { Settings } from '../Domain/Settings';
import type { TagStatList } from '../Domain/Tag';
import type { PatternList } from '../Domain/Pattern';

export interface IMoiraApi {
    getPatternList(): Promise<PatternList>;
    getTagStats(): Promise<TagStatList>;
    getSettings(): Promise<Settings>;
    getTriggerList(page: number): Promise<TriggerList>;
    getTrigger(id: string): Promise<Trigger>;
    getTriggerState(id: string): Promise<TriggerState>;
    getTriggerEvents(id: string, page: number): Promise<Events>;
}

export default class Api implements IMoiraApi {
    getPatternList(): Promise<PatternList> {
        const url = '/api/pattern.json';
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTagStats(): Promise<TagStatList> {
        const url = '/api/stats.json';
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getSettings(): Promise<Settings> {
        const url = '/api/settings.json';
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTriggerList(page: number): Promise<TriggerList> {
        const url = '/api/triggers.json?page=' + page;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTrigger(id: string): Promise<Trigger> {
        const url = '/api/trigger-data.json?id=' + id;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTriggerState(id: string): Promise<TriggerState> {
        const url = '/api/trigger-state.json?id=' + id;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTriggerEvents(id: string, page: number): Promise<Events> {
        const url = '/api/trigger-state.json?id=' + id + '&page=' + page;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }
}
