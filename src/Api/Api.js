// @flow
import type { Config } from '../Domain/Config';
import type { Triggers } from '../Domain/Triggers';
import type { Trigger } from '../Domain/Triggers';

export interface IMoiraApi {
    trigger: {
        page(page: number): Promise<Triggers>;
    };
}

export default class Api implements IMoiraApi {
    trigger = {
        page: (page: number): Promise<Triggers> => {
            return fetch('/fakeApi/triggers.json', {
                method: 'GET',
            }).then(response => response.json());
        },
        get: (id: string): Promise<Trigger> => {
            return fetch('/fakeApi/trigger-data.json', {
                method: 'GET',
            }).then(response => response.json());
        },
    };
}
