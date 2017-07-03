// @flow
import type { Trigger } from '../Domain/Trigger';

export type Triggers = {|
    total: number;
    page: number;
    size: number;
    list: Array<Trigger>;
|};
