// @flow
import type { UserContact } from './UserContact';

export type ConfigType = {
    api_url: string; // ??? что делать с переименованием
    contacts: UserContact[];
    paging: {
        size: number; // ??? откуда приходит надстройка
    };
};
