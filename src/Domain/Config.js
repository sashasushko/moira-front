// @flow
import type { ContactTemplate } from './ContactTemplate';

export type ConfigType = {
    api_url: string; // ??? что делать с переименованием
    contacts: ContactTemplate[];
    paging: {
        size: number;
    };
};
