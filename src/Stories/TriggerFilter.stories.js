// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TriggerFilter from '../Components/TriggerFilter/TriggerFilter';

const remainedTags = ['EDI.ESLogging', 'dmitry:ReplicaClusterError.ReplicaClusterWarn', 'KE.Infra'];
const selectedTags = ['sprinter', 'BillyStudy'];
const subscribedTags = ['test__'];

storiesOf('TriggerFilter', module).add('Default', () =>
    <TriggerFilter
        selectedTags={selectedTags}
        subscribedTags={subscribedTags}
        remainedTags={remainedTags}
        onSelect={action('onSelect')}
        onRemove={action('onRemove')}
    />
);
