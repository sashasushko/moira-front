// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TriggerFilter from '../Components/TriggerFilter/TriggerFilter';
import TagSelector from '../Components/TagSelector/TagSelector';

const remainedTags = ['EDI.ESLogging', 'dmitry:ReplicaClusterError.ReplicaClusterWarn', 'KE.Infra'];
const selectedTags = ['sprinter', 'BillyStudy'];
const subscribedTags = ['test__'];

storiesOf('TriggerFilter', module).add('Default', () =>
    <TriggerFilter>
        <TagSelector
            remainedTags={remainedTags}
            subscribedTags={subscribedTags}
            selectedTags={selectedTags}
            onSelect={action('onSelect')}
            onRemove={action('onRemove')}
        />
    </TriggerFilter>
);
