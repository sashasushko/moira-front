// @flow

import type { Subscribtion } from './Subscribtion';

export type Tag = {|
    list: Array<string>;
    tags: {|
        [tag: string]: {|
            maintenance?: boolean | number;
        |};
    |};
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
