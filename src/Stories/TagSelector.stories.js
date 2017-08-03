// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TagSelector from '../Components/TagSelector/TagSelector';

const remainedTags = ['abonentsErrors', 'dmitry:ReplicaClusterError.ReplicaClusterWarn', 'build'];
const selectedTags = ['test', 'dev'];

storiesOf('TagSelector', module).add('Default', () =>
    <TagSelector
        remainedTags={remainedTags}
        selectedTags={selectedTags}
        onSelect={action('onSelect')}
        onRemove={action('onRemove')}
    />
);
