// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TagSelector from '../Components/TagSelector/TagSelector';

const remainedTags = ['abonentsErrors', 'dmitry:ReplicaClusterError.ReplicaClusterWarn', 'build'];
const selectedTags = ['abonentsErrors', 'dev.test.hdd'];
const subscribedTags = ['test__'];

storiesOf('TagSelector', module)
    .add('Default', () =>
        <TagSelector
            subscribedTags={[]}
            selectedTags={[]}
            remainedTags={[]}
            onSelect={action('onSelect')}
            onRemove={action('onRemove')}
        />
    )
    .add('With remained tags', () =>
        <TagSelector
            subscribedTags={[]}
            selectedTags={[]}
            remainedTags={remainedTags}
            onSelect={action('onSelect')}
            onRemove={action('onRemove')}
        />
    )
    .add('With selected tags', () =>
        <TagSelector
            subscribedTags={[]}
            selectedTags={selectedTags}
            remainedTags={[]}
            onSelect={action('onSelect')}
            onRemove={action('onRemove')}
        />
    )
    .add('With subscribed tags', () =>
        <TagSelector
            subscribedTags={subscribedTags}
            selectedTags={[]}
            remainedTags={[]}
            onSelect={action('onSelect')}
            onRemove={action('onRemove')}
        />
    )
    .add('With all', () =>
        <TagSelector
            subscribedTags={subscribedTags}
            selectedTags={subscribedTags}
            remainedTags={remainedTags}
            onSelect={action('onSelect')}
            onRemove={action('onRemove')}
        />
    );
