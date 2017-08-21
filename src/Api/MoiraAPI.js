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

const server = 'http://vm-moira-all1:4445/';

export default class Api implements IMoiraApi {
    getPatternList(): Promise<PatternList> {
        const url = server + 'api/pattern';
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTagList(): Promise<TagList> {
        const url = server + 'api/tag';
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTagStats(): Promise<TagStatList> {
        const url = server + 'api/stats';
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getSettings(): Promise<Settings> {
        const url = server + 'api/user/settings';
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTriggerList(page: number): Promise<TriggerList> {
        const url = `${server}api/trigger/page?p=${page}&size=20`;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTrigger(id: string): Promise<Trigger> {
        const url = `${server}api/trigger/${id}`;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTriggerState(id: string): Promise<TriggerState> {
        const url = `${server}api/trigger/${id}/state`;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }

    getTriggerEvents(id: string): Promise<EventList> {
        const url = `${server}api/event/${id}?p=0&size=100`;
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json());
    }
}
