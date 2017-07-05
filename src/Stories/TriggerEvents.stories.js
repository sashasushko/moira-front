// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TriggerEvents from '../Components/TriggerEvents/TriggerEvents';

storiesOf('TriggerEvents', module).add('default', () => <TriggerEvents />);
