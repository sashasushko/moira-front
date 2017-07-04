// @flow
import type { Config } from '../Domain/Config';
import type { TriggersList } from '../Domain/TriggersList';
import type { Trigger, TriggerState } from '../Domain/Trigger';

export interface IMoiraApi {
    trigger: {
        page(page: number): Promise<TriggersList>;
    };
}

export default class Api implements IMoiraApi {
    trigger = {
        page: (page: number): Promise<TriggersList> => {
            console.log('api.trigger.page: %s', page);
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
