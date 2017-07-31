// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import TriggerItem from '../Components/TriggerItem/TriggerItem';

const data = {
    default: {
        id: '3e93211b-7fec-4c70-b5e1-abb36d6a4a1d',
        is_simple_trigger: false,
        name: 'ke.notifications-dev.mail-sender.alive',
        targets: ['sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)'],
        tags: ['ke.notifications-dev', 'ke.notifications'],
        patterns: ['KE-cloud.Notifications.*.MailSender.PfrReport.Alive'],
        expression: '',
        ttl: 1200,
        ttl_state: 'NODATA',
        throttling: 0,
        sched: {
            endOffset: 1439,
            days: [
                { enabled: true, name: 'Mon' },
                { enabled: true, name: 'Tue' },
                { enabled: true, name: 'Wed' },
                { enabled: true, name: 'Thu' },
                { enabled: true, name: 'Fri' },
                { enabled: true, name: 'Sat' },
                { enabled: true, name: 'Sun' },
            ],
            startOffset: 0,
            tzOffset: -420,
        },
        warn_value: null,
        error_value: null,
        last_check: {
            metrics: {
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
            },
            timestamp: 1499418145,
            state: 'OK',
            score: 14000,
        },
    },
    longName: {
        id: '3e93211b-7fec-4c70-b5e1-abb36d6a4a1d',
        is_simple_trigger: false,
        name:
            'ke.notifications-dev.mail-sender.alive.cloud.noname.*.all.metrics.few.error.one.warning.zero.nodata.min.ok',
        targets: ['sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)'],
        tags: ['ke.notifications-dev', 'ke.notifications'],
        patterns: ['KE-cloud.Notifications.*.MailSender.PfrReport.Alive'],
        expression: '',
        ttl: 1200,
        ttl_state: 'NODATA',
        throttling: 0,
        sched: {
            endOffset: 1439,
            days: [
                { enabled: true, name: 'Mon' },
                { enabled: true, name: 'Tue' },
                { enabled: true, name: 'Wed' },
                { enabled: true, name: 'Thu' },
                { enabled: true, name: 'Fri' },
                { enabled: true, name: 'Sat' },
                { enabled: true, name: 'Sun' },
            ],
            startOffset: 0,
            tzOffset: -420,
        },
        warn_value: null,
        error_value: null,
        last_check: {
            metrics: {
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
            },
            timestamp: 1499418145,
            state: 'OK',
            score: 14000,
        },
    },
    largeCounters: {
        id: '3e93211b-7fec-4c70-b5e1-abb36d6a4a1d',
        is_simple_trigger: false,
        name: 'ke.notifications-dev.mail-sender.alive',
        targets: ['sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)'],
        tags: ['ke.notifications-dev', 'ke.notifications'],
        patterns: ['KE-cloud.Notifications.*.MailSender.PfrReport.Alive'],
        expression: '',
        ttl: 1200,
        ttl_state: 'NODATA',
        throttling: 0,
        sched: {
            endOffset: 1439,
            days: [
                { enabled: true, name: 'Mon' },
                { enabled: true, name: 'Tue' },
                { enabled: true, name: 'Wed' },
                { enabled: true, name: 'Thu' },
                { enabled: true, name: 'Fri' },
                { enabled: true, name: 'Sat' },
                { enabled: true, name: 'Sun' },
            ],
            startOffset: 0,
            tzOffset: -420,
        },
        warn_value: null,
        error_value: null,
        last_check: {
            metrics: {
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
                'sumSeries(KE-cloud.Noti2fications.*.MailSender.PfrReport.Alive)': {
                    timestamp: 1499416938,
                    state: 'NODATA',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.A45live)': {
                    timestamp: 1499416938,
                    state: 'NODATA',
                },
                'sumSeries(KE-cloud.Not1ifications.*.MailSender.PfrIos.Alive)': {
                    timestamp: 1499416938,
                    state: 'NODATA',
                },
                'sumSeries(KE-cloud.Notifica3tions.*.MailSender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'NODATA',
                },
                'sumSeries(KE-cloud.Notificati1ons.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'NODATA',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
                'sumSeries(KE-cloud.Notifications.*.M4ailSender.PfrReport.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-cloud.Notificati21ons.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'NODATA',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
                'sumSeries(KE-cloud.N1otificati21ons.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'NODATA',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
                'sumSeries(KE-cloud7.Notifications.*.MailSender.MrApplication.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-2cloud.Notifications.*.MailSender.PfrIos.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-cloud.Notificatio4ns.*.MailSender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-cloud.Notific4ations.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
                'sumSeries(6KE-cloud.Notifications.*.M4ailSender.PfrReport.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-cloud7.Notifications.*.Mail6Sender.MrApplication.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-2cloud.Notification6s.*.MailSender.PfrIos.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-c6loud.Notificatio4ns.*.MailSender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-cloud6.Notific4ations.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
                'sumSeries(KE-clou3d.Notifications.*.M4ailSender.PfrReport.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-cloud7.Notifications.*.MailSender.MrAp3plication.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-2cloud.3Notifications.*.MailSender.PfrIos.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-cloud.Notificatio4ns.*.Mail3Sender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-cloud.Notific4at3ions.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
                'sumSeries(6KE-cloud.Not3ifications.*.M4ailSender.PfrReport.Al3ive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(K3E-cloud7.Notifications.*.Mail6Sender.MrApplication.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-2cloud.Notification6s.*.MailSender.PfrIos.Aliv3e)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-c6loud.Notificat3io4ns.*.MailSender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
            },
            timestamp: 1499418145,
            state: 'OK',
            score: 14000,
        },
    },
    fewStates: {
        id: '3e93211b-7fec-4c70-b5e1-abb36d6a4a1d',
        is_simple_trigger: false,
        name: 'ke.notifications-dev.mail-sender.alive',
        targets: ['sumSeries(KE-cloud.Notifications.*.MailSender.StatReport.Alive)'],
        tags: ['ke.notifications-dev', 'ke.notifications'],
        patterns: ['KE-cloud.Notifications.*.MailSender.Submission.Alive'],
        expression: '',
        ttl: 1200,
        ttl_state: 'NODATA',
        throttling: 0,
        sched: {
            endOffset: 1439,
            days: [
                { enabled: true, name: 'Mon' },
                { enabled: true, name: 'Tue' },
                { enabled: true, name: 'Wed' },
                { enabled: true, name: 'Thu' },
                { enabled: true, name: 'Fri' },
                { enabled: true, name: 'Sat' },
                { enabled: true, name: 'Sun' },
            ],
            startOffset: 0,
            tzOffset: -420,
        },
        warn_value: null,
        error_value: null,
        last_check: {
            metrics: {
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)': {
                    timestamp: 1499416938,
                    state: 'NODATA',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)': {
                    timestamp: 1499416938,
                    state: 'WARNING',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'ERROR',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'NODATA',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
            },
            timestamp: 1499418145,
            state: 'OK',
            score: 14000,
        },
    },
    lotTargets: {
        id: '3e93211b-7fec-4c70-b5e1-abb36d6a4a1d',
        is_simple_trigger: false,
        name: 'ke.notifications-dev.mail-sender.alive',
        targets: [
            'sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.Expert.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.K705Letter.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.MrDemand.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.MrLetter.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.MrReport.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.PfrLetter.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.StatLetter.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.StatReport.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.Submission.Alive)',
        ],
        tags: ['ke.notifications-dev', 'ke.notifications'],
        patterns: ['KE-cloud.Notifications.*.MailSender.Submission.Alive'],
        expression: '',
        ttl: 1200,
        ttl_state: 'NODATA',
        throttling: 0,
        sched: {
            endOffset: 1439,
            days: [
                { enabled: true, name: 'Mon' },
                { enabled: true, name: 'Tue' },
                { enabled: true, name: 'Wed' },
                { enabled: true, name: 'Thu' },
                { enabled: true, name: 'Fri' },
                { enabled: true, name: 'Sat' },
                { enabled: true, name: 'Sun' },
            ],
            startOffset: 0,
            tzOffset: -420,
        },
        warn_value: null,
        error_value: null,
        last_check: {
            metrics: {
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
            },
            timestamp: 1499418145,
            state: 'OK',
            score: 14000,
        },
    },
    longTarget: {
        id: '3e93211b-7fec-4c70-b5e1-abb36d6a4a1d',
        is_simple_trigger: false,
        name: 'ke.notifications-dev.mail-sender.alive',
        targets: [
            'sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive.KE-cloud.Notifications.*.MailSender.Expert.Alive.KE-cloud.Notifications.*.MailSender.K705Letter.Alive.KE-cloud.Notifications.*.MailSender.MrApplication.AliveKE-cloud.Notifications.*.MailSender.MrDemand.Alive.KE-cloud.Notifications.*.MailSender.MrIon.Alive)',
        ],
        tags: ['ke.notifications-dev', 'ke.notifications'],
        patterns: ['KE-cloud.Notifications.*.MailSender.Submission.Alive'],
        expression: '',
        ttl: 1200,
        ttl_state: 'NODATA',
        throttling: 0,
        sched: {
            endOffset: 1439,
            days: [
                { enabled: true, name: 'Mon' },
                { enabled: true, name: 'Tue' },
                { enabled: true, name: 'Wed' },
                { enabled: true, name: 'Thu' },
                { enabled: true, name: 'Fri' },
                { enabled: true, name: 'Sat' },
                { enabled: true, name: 'Sun' },
            ],
            startOffset: 0,
            tzOffset: -420,
        },
        warn_value: null,
        error_value: null,
        last_check: {
            metrics: {
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
            },
            timestamp: 1499418145,
            state: 'OK',
            score: 14000,
        },
    },
    shortTags: {
        id: '3e93211b-7fec-4c70-b5e1-abb36d6a4a1d',
        is_simple_trigger: false,
        name: 'ke.notifications-dev.mail-sender.alive',
        targets: ['sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)'],
        tags: ['dev', 'test_'],
        patterns: ['KE-cloud.Notifications.*.MailSender.PfrReport.Alive'],
        expression: '',
        ttl: 1200,
        ttl_state: 'NODATA',
        throttling: 0,
        sched: {
            endOffset: 1439,
            days: [
                { enabled: true, name: 'Mon' },
                { enabled: true, name: 'Tue' },
                { enabled: true, name: 'Wed' },
                { enabled: true, name: 'Thu' },
                { enabled: true, name: 'Fri' },
                { enabled: true, name: 'Sat' },
                { enabled: true, name: 'Sun' },
            ],
            startOffset: 0,
            tzOffset: -420,
        },
        warn_value: null,
        error_value: null,
        last_check: {
            metrics: {
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
            },
            timestamp: 1499418145,
            state: 'OK',
            score: 14000,
        },
    },
    longTags: {
        id: '3e93211b-7fec-4c70-b5e1-abb36d6a4a1d',
        is_simple_trigger: false,
        name: 'ke.notifications-dev.mail-sender.alive',
        targets: ['sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)'],
        tags: ['dev-or-not-dev-what-is-question', 'ke.notifications-dev-test-sort'],
        patterns: ['KE-cloud.Notifications.*.MailSender.PfrReport.Alive'],
        expression: '',
        ttl: 1200,
        ttl_state: 'NODATA',
        throttling: 0,
        sched: {
            endOffset: 1439,
            days: [
                { enabled: true, name: 'Mon' },
                { enabled: true, name: 'Tue' },
                { enabled: true, name: 'Wed' },
                { enabled: true, name: 'Thu' },
                { enabled: true, name: 'Fri' },
                { enabled: true, name: 'Sat' },
                { enabled: true, name: 'Sun' },
            ],
            startOffset: 0,
            tzOffset: -420,
        },
        warn_value: null,
        error_value: null,
        last_check: {
            metrics: {
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
            },
            timestamp: 1499418145,
            state: 'OK',
            score: 14000,
        },
    },
    lotTags: {
        id: '3e93211b-7fec-4c70-b5e1-abb36d6a4a1d',
        is_simple_trigger: false,
        name: 'ke.notifications-dev.mail-sender.alive',
        targets: ['sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)'],
        tags: ['dev', 'test_', 'ke.notifications', 'ke.notifications-dev'],
        patterns: ['KE-cloud.Notifications.*.MailSender.PfrReport.Alive'],
        expression: '',
        ttl: 1200,
        ttl_state: 'NODATA',
        throttling: 0,
        sched: {
            endOffset: 1439,
            days: [
                { enabled: true, name: 'Mon' },
                { enabled: true, name: 'Tue' },
                { enabled: true, name: 'Wed' },
                { enabled: true, name: 'Thu' },
                { enabled: true, name: 'Fri' },
                { enabled: true, name: 'Sat' },
                { enabled: true, name: 'Sun' },
            ],
            startOffset: 0,
            tzOffset: -420,
        },
        warn_value: null,
        error_value: null,
        last_check: {
            metrics: {
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
            },
            timestamp: 1499418145,
            state: 'OK',
            score: 14000,
        },
    },
    lotOfAll: {
        id: '3e93211b-7fec-4c70-b5e1-abb36d6a4a1d',
        is_simple_trigger: false,
        name:
            'ke.notifications-dev.mail-sender.alive.cloud.noname.*.all.metrics.few.error.one.warning.zero.nodata.min.ok',
        targets: [
            'sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive.KE-cloud.Notifications.*.MailSender.Expert.Alive.KE-cloud.Notifications.*.MailSender.K705Letter.Alive.KE-cloud.Notifications.*.MailSender.MrApplication)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.Expert.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.K705Letter.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.MrDemand.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.MrLetter.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.MrReport.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.PfrLetter.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.StatLetter.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.StatReport.Alive)',
            'sumSeries(KE-cloud.Notifications.*.MailSender.Submission.Alive)',
        ],
        tags: ['dev', 'test', 'ke.notifications', 'ke.notifications-dev', 'very.long.tag.why.you.choice.that.name?'],
        patterns: ['KE-cloud.Notifications.*.MailSender.PfrReport.Alive'],
        expression: '',
        ttl: 1200,
        ttl_state: 'NODATA',
        throttling: 0,
        sched: {
            endOffset: 1439,
            days: [
                { enabled: true, name: 'Mon' },
                { enabled: true, name: 'Tue' },
                { enabled: true, name: 'Wed' },
                { enabled: true, name: 'Thu' },
                { enabled: true, name: 'Fri' },
                { enabled: true, name: 'Sat' },
                { enabled: true, name: 'Sun' },
            ],
            startOffset: 0,
            tzOffset: -420,
        },
        warn_value: null,
        error_value: null,
        last_check: {
            metrics: {
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                },
                'sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)': {
                    timestamp: 1499416938,
                    state: 'OK',
                    suppressed: false,
                    event_timestamp: 1499331679,
                },
            },
            timestamp: 1499418145,
            state: 'OK',
            score: 14000,
        },
    },
};

storiesOf('TriggerItem', module)
    .addDecorator(StoryRouter())
    .add('Default', () => <TriggerItem data={data.default} />)
    .add('Long name', () => <TriggerItem data={data.longName} />)
    .add('With large counters', () => <TriggerItem data={data.largeCounters} />)
    .add('Few states', () => <TriggerItem data={data.fewStates} />)
    .add('A lot targets', () => <TriggerItem data={data.lotTargets} />)
    .add('Long target', () => <TriggerItem data={data.longTarget} />)
    .add('Short tags', () => <TriggerItem data={data.shortTags} />)
    .add('Long tags', () => <TriggerItem data={data.longTags} />)
    .add('A lot tags', () => <TriggerItem data={data.lotTags} />)
    .add('A lot of all', () => <TriggerItem data={data.lotOfAll} />)
    .add('Showed metrics list', () => <TriggerItem data={data.largeCounters} showMetrics />);