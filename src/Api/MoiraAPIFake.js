// @flow
import type { IMoiraApi } from './MoiraAPI';
import type { EventList } from '../Domain/Event';
import type { Trigger, TriggerList, TriggerState } from '../Domain/Trigger';
import type { Settings } from '../Domain/Settings';
import type { TagList, TagStatList } from '../Domain/Tag';
import type { PatternList } from '../Domain/Pattern';
import type { NotificationList } from '../Domain/Notification';

import FakePattern from './ApiFakeData/pattern.json';
import FakeTag from './ApiFakeData/tag.json';
import FakeStats from './ApiFakeData/stats.json';
import FakeSettings from './ApiFakeData/settings.json';
import FakeTriggers from './ApiFakeData/triggers.json';
import FakeTrigger from './ApiFakeData/trigger.json';
import FakeTriggerState from './ApiFakeData/state.json';
import FakeTriggerEvents from './ApiFakeData/events.json';
import FakeNotifications from './ApiFakeData/notifications.json';

function sleep<T>(response: T): Promise<T> {
    return new Promise(resolve => setTimeout(() => resolve(response), 500));
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

    async getTriggerList(page: number, tags: string): Promise<TriggerList> {
        return await sleep(FakeTriggers);
    }

    async getTrigger(id: string): Promise<Trigger> {
        return await sleep(FakeTrigger);
    }

    async setMaintenance(triggerId: string, data: { [metric: string]: number }): Promise<number> {
        return await sleep(200);
    }

    async delMetric(triggerId: string, metric: string): Promise<number> {
        return await sleep(200);
    }

    async getTriggerState(id: string): Promise<TriggerState> {
        return await sleep(FakeTriggerState);
    }

    async getTriggerEvents(id: string): Promise<EventList> {
        return await sleep(FakeTriggerEvents);
    }

    async getNotificationList(): Promise<NotificationList> {
        return await sleep(FakeNotifications);
    }
}
