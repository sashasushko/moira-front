// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import type { Trigger } from '../Domain/Trigger';
import parsePathSearch from '../Helpers/parsePathSearch';
import TriggerList from '../Components/TriggerList/TriggerList';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    total: ?number;
    page: ?number;
    size: ?number;
    list: ?Array<Trigger>;
|};

class TriggersContainer extends React.Component {
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
        const { location, moiraApi } = this.props;
        const parsedPath = parsePathSearch(location.search);
        const page = typeof parsedPath.page === 'number' ? parsedPath.page : 0;
        const triggerList = await moiraApi.getTriggerList(page);
        this.setState({ loading: false, ...triggerList });
    }

    render(): React.Element<*> {
        const { loading, list } = this.state;
        return (
            <div>
                {loading && <p>Loading...</p>}
                {list && <TriggerList items={list} />}
            </div>
        );
    }
}

export default withMoiraApi(TriggersContainer);
