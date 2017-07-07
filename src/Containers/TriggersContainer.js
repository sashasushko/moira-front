// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import type { Trigger } from '../Domain/Trigger';
import parsePathSearch from '../Helpers/parsePathSearch';
import TriggerList from '../Components/TriggerList/TriggerList';

type Props = ContextRouter & { api: IMoiraApi };
type State = {|
    loading: boolean;
    total: ?number;
    page: ?number;
    size: ?number;
    list: ?Array<Trigger>;
|};

export default class TriggersContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        total: null,
        page: null,
        size: null,
        list: null,
    };

    componentDidMount() {
        this.getData();
    }

    async getData(): Promise<void> {
        const { location, api } = this.props;
        const parsedPath = parsePathSearch(location.search);
        const page = typeof parsedPath.page === 'number' ? parsedPath.page : 0;
        const triggerList = await api.getTriggerList(page);
        this.setState({ loading: false, ...triggerList });
    }

    render(): React.Element<*> {
        const { loading, list } = this.state;
        const items = list ? list : [];
        return (
            <div>
                {loading && <p>Loading...</p>}
                <TriggerList items={items} />
            </div>
        );
    }
}
