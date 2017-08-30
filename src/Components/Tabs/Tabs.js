// @flow
import React from 'react';
import Tabs from 'retail-ui/components/Tabs';
import cn from './Tabs.less';

type Props = {|
    value: string;
    children: React.Element<*>;
|};
type ItemProps = {|
    id: string;
    label: string;
    component: React$Component<*, *, *>;
|};
type State = {|
    activeId: string;
|};

export default class TabsCustom extends React.Component {
    props: Props;
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            activeId: props.value,
        };
    }

    static Tab = function Tab({ id, component: Component, ...rest }: ItemProps): React.Element<any> {
        return <Component {...rest} />;
    };

    render(): React.Element<*> {
        const { activeId } = this.state;
        const { children } = this.props;

        return React.Children.count(children) === 1
            ? <div>
                  {children}
              </div>
            : <div>
                  <div className={cn('header')}>
                      <Tabs value={activeId} onChange={(target, value) => this.setState({ activeId: value })}>
                          {React.Children.map(children, ({ props }) =>
                              <Tabs.Tab id={props.id}>
                                  {props.label}
                              </Tabs.Tab>
                          )}
                      </Tabs>
                  </div>
                  {React.Children.toArray(children).filter(({ props }) => props.id === activeId)}
              </div>;
    }
}
