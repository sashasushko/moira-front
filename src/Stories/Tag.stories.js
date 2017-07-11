// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tag from '../Components/Tag/Tag';

storiesOf('Items List', module).add('default', () => <Tag title='Tag title' />);
