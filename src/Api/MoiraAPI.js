// @flow
import type { Events } from '../Domain/Events';
import type { Trigger, TriggerList, TriggerState } from '../Domain/Trigger';
import type { Settings } from '../Domain/Settings';
import type { TagStatList } from '../Domain/Tag';
import type { PatternList } from '../Domain/Pattern';

export interface IMoiraApi {
    pattern: {
        list(): Promise<PatternList>;
    };
    tag: {
        list(): Promise<TagStatList>;
    };
    settings: {
        get(): Promise<Settings>;
    };
    event: {
        page(id: string, page: number): Promise<Events>;
    };
    trigger: {
        page(page: number): Promise<TriggerList>;
        get(id: string): Promise<Trigger>;
        state(id: string): Promise<TriggerState>;
    };
}

export default class Api implements IMoiraApi {
    pattern = {
        list: (): Promise<PatternList> => {
            console.log('api.pattern.list');
            return fetch('/fakeApi/pattern.json', {
                method: 'GET',
            }).then(response => response.json());
        },
    };
    tag = {
        list: (): Promise<TagStatList> => {
            console.log('api.tag.list');
            return fetch('/fakeApi/stats.json', {
                method: 'GET',
            }).then(response => response.json());
        },
    };
    settings = {
        get: (): Promise<Settings> => {
            console.log('api.settings.get');
            return fetch('/fakeApi/settings.json', {
                method: 'GET',
            }).then(response => response.json());
        },
    };
    event = {
        page: (id: string, page: number): Promise<Events> => {
            console.log('api.event.page: %s %d', id, page);
            return fetch('/fakeApi/trigger-event.json', {
                method: 'GET',
            }).then(response => response.json());
        },
    };
    trigger = {
        page: (page: number): Promise<TriggerList> => {
            console.log('api.trigger.page: %d', page);
            return fetch('/fakeApi/triggers.json', {
                method: 'GET',
            }).then(response => response.json());
        },
        get: (id: string): Promise<Trigger> => {
            console.log('api.trigger.get: %s', id);
            return fetch('/fakeApi/trigger-data.json', {
                method: 'GET',
            }).then(response => response.json());
        },
        state: (id: string): Promise<TriggerState> => {
            console.log('api.trigger.state: %s', id);
            return fetch('/fakeApi/trigger-state.json', {
                method: 'GET',
            }).then(response => response.json());
        },
    };
}
