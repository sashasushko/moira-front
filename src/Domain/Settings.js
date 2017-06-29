// @flow
import type { UserContact } from './UserContact';

export type SettingsType = {
    login: string;
    contacts: UserContact[];
    subscriptions: []; // ??? пока не понятно, что за массив
};
