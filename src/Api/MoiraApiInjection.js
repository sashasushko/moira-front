// @flow
import React from 'react';
import PropTypes from 'prop-types';

export const ApiProvider = createApiProvider('moiraApi');
export const withMoiraApi = createApiInjectionWrapper('moiraApi');

function createApiProvider(apiKey: string) {
    return class ApiProvider extends React.Component {
        static childContextTypes = {
            [apiKey]: React.PropTypes.object,
        };

        getChildContext() {
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

function createApiInjectionWrapper(apiKey: string) {
    return Component => {
        return class Wrapper extends React.Component {
            static contextTypes = {
                [apiKey]: PropTypes.object,
            };

            render(): React.Element<*> {
                return <Component {...this.props} {...this.context} />;
            }
        };
    };
}
