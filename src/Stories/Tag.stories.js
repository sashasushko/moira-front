// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tag from '../Components/Tag/Tag';

storiesOf('Tag', module)
    .add('Default', () => <Tag title='abonentsErrors' />)
    .add('Long title', () => <Tag title='dmitry:ReplicaClusterError.ReplicaClusterWarn' />)
    .add('Short title', () => <Tag title='test' />)
    .add('With remove', () => <Tag title='abonentsErrors' onRemove={action('onRemove')} />);
