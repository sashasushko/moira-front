// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from '../Components/Tag/Tag';

storiesOf('Tag', module)
    .add('Default', () => <Tag title='abonentsErrors' />)
    .add('Long title', () => <Tag title='dmitry:ReplicaClusterError.ReplicaClusterWarn' />)
    .add('Short title', () => <Tag title='test' />);
