// @flow
import type { Trigger } from '../Domain/Trigger';

export type TriggersList = {|
    total: number;
    page: number;
    size: number;
    list: Array<Trigger>;
|};
