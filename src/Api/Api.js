// @flow
import type { Config } from '../Domain/Config';
import type { Triggers } from '../Domain/Triggers';

export interface IMoiraApi {
    query(url: string, method: string, body?: string): Promise<any>;
    getConfig(): Promise<Config>;
    trigger: {
        page(): Promise<Triggers>;
    };
}

export default class FakeMoiraApi implements IMoiraApi {
    getConfig(): Promise<Config> {
        return fetch('/config.json').then(response => response.json());
    }

    async query(
        url: string,
        method: string,
        body: string | void
    ): Promise<any> {
        const config = await this.getConfig();
        const fullUrl = config.api_url + url;
        const params = { method, body };
        return fetch(fullUrl, params).then(response => response.json());
    }

    trigger = {
        page: (): Promise<Triggers> => {
            return this.query('/triggers.json', 'GET');
        },
    };
}
