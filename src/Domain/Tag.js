// @flow
import type { Subscribtion } from './Subscribtion';

export type TagList = {|
    list: Array<string>;
|};

export type TagStat = {|
    data: {|
        maintenance?: boolean | number;
    |};
    name: string;
    subscriptions: Array<Subscribtion>;
    triggers: Array<string>;
|};

export type TagStatList = {|
    list: Array<TagStat>;
|};
