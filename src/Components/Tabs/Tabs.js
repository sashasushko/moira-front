// @flow
import React from 'react';
import Tabs from 'retail-ui/components/Tabs';
import cn from './Tabs.less';

type Props = {|
    value: string;
    children: any;
|};
type TabProps = {|
    id: string;
    label: string;
    children: any;
|};
type State = {|
    active: string;
|};

const TabsTab = Tabs.Tab;

export default class TabsCustom extends React.Component {
    props: Props;
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            active: props.value,
        };
    }

    static Tab = function Tab({ children }: TabProps): React.Element<*> {
        return <div>{children}</div>;
    };

    render(): React.Element<*> {
        const { active } = this.state;
        const { children } = this.props;
        return React.Children.count(children) === 1 ? (
            <div>{children}</div>
        ) : (
            <div>
                <div className={cn('header')}>
                    <Tabs value={active} onChange={(target, value) => this.setState({ active: value })}>
                        {React.Children.map(children, ({ props }) => <TabsTab id={props.id}>{props.label}</TabsTab>)}
                    </Tabs>
                </div>
                {React.Children.toArray(children).filter(({ props }) => props.id === active)}
            </div>
        );
    }
}

export const Tab = TabsCustom.Tab;
