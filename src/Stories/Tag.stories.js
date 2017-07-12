// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tag from '../Components/Tag/Tag';

storiesOf('Tag', module).add('default', () => <Tag title='Tag title' />);
