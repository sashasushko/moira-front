// @flow
import type { IMoiraApi } from './MoiraAPI';
import type { EventList } from '../Domain/Event';
import type { Trigger, TriggerList, TriggerState } from '../Domain/Trigger';
import type { Settings } from '../Domain/Settings';
import type { TagList, TagStatList } from '../Domain/Tag';
import type { PatternList } from '../Domain/Pattern';

import FakePattern from './ApiFakeData/pattern.json';
import FakeTag from './ApiFakeData/tag.json';
import FakeStats from './ApiFakeData/stats.json';
import FakeSettings from './ApiFakeData/settings.json';
import FakeTriggers from './ApiFakeData/triggers.json';
import FakeTrigger from './ApiFakeData/trigger.json';
import FakeTriggerState from './ApiFakeData/state.json';
import FakeTriggerEvents from './ApiFakeData/events.json';

function sleep<T>(response: T): Promise<T> {
    // const time = Math.floor(Math.random() * (2.5 - 0.5) + 0.5) * 1000;
    const time = 0;
    return new Promise(resolve => setTimeout(() => resolve(response), time));
}

export default class ApiFake implements IMoiraApi {
    async getPatternList(): Promise<PatternList> {
        return await sleep(FakePattern);
    }

    async getTagList(): Promise<TagList> {
        return await sleep(FakeTag);
    }

    async getTagStats(): Promise<TagStatList> {
        return await sleep(FakeStats);
    }

    async getSettings(): Promise<Settings> {
        return await sleep(FakeSettings);
    }

    async getTriggerList(page: number): Promise<TriggerList> {
        console.log(`fake api attr, page=${page}`);
        return await sleep(FakeTriggers);
    }

    async getTrigger(id: string): Promise<Trigger> {
        console.log(`fake api attr, id=${id}`);
        return await sleep(FakeTrigger);
    }

    async getTriggerState(id: string): Promise<TriggerState> {
        console.log(`fake api attr, id=${id}`);
        return await sleep(FakeTriggerState);
    }

    async getTriggerEvents(id: string): Promise<EventList> {
        console.log(`fake api attr, id=${id}`);
        return await sleep(FakeTriggerEvents);
    }
}
