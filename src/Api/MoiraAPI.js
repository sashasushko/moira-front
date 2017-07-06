// @flow
import type { EventList } from '../Domain/Event';
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
    getTriggerEvents(id: string, page: number): Promise<EventList>;
}

export default class Api implements IMoiraApi {
    getPatternList(): Promise<PatternList> {
        const url = '/fakeApi/pattern.json';
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTagStats(): Promise<TagStatList> {
        const url = '/fakeApi/stats.json';
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getSettings(): Promise<Settings> {
        const url = '/fakeApi/settings.json';
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTriggerList(page: number): Promise<TriggerList> {
        const url = '/fakeApi/triggers.json?page=' + page;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTrigger(id: string): Promise<Trigger> {
        const url = '/fakeApi/trigger-data.json?id=' + id;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTriggerState(id: string): Promise<TriggerState> {
        const url = '/fakeApi/trigger-state.json?id=' + id;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTriggerEvents(id: string, page: number): Promise<EventList> {
        const url = '/api/trigger-state.json?id=' + id + '&page=' + page;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }
}
