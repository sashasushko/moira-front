// @flow
import React from 'react';
import PropTypes from 'prop-types';

export default function createApiProvider(apiKey: string): Class<React.Component<void, { children: any }, void>> {
    return class ApiProvider extends React.Component {
        static childContextTypes = {
            [apiKey]: React.PropTypes.object,
        };

        static propTypes = {
            children: PropTypes.element.isRequired,
        };

        getChildContext(): { [apiKey: string]: {} } {
            return {
                [apiKey]: this.props[apiKey],
            };
        }

        render(): React.Element<*> {
            const { children } = this.props;
            return children;
        }
    };
}
