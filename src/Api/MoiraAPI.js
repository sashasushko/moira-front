// @flow
import type { Events } from '../Domain/Events';
import type { Trigger, TriggerList, TriggerState } from '../Domain/Trigger';

export interface IMoiraApi {
    event: {
        page(page: number): Promise<Events>;
    };
    trigger: {
        page(page: number): Promise<TriggersList>;
        get(id: string): Promise<Trigger>;
        state(id: string): Promise<TriggerState>;
    };
}

export default class Api implements IMoiraApi {
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
