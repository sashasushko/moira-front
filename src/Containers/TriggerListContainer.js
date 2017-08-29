// @flow
import React from 'react';
import Paging from 'retail-ui/components/Paging';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import type { Trigger } from '../Domain/Trigger';
import type { Maintenance } from '../Domain/Maintenance';
import { getMaintenanceTime } from '../Domain/Maintenance';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import queryString from 'query-string';
import moment from 'moment';
import { concat, difference, flatten } from 'lodash';
import TagSelector from '../Components/TagSelector/TagSelector';
import TriggerList from '../Components/TriggerList/TriggerList';
import Layout from '../Components/Layout/Layout';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    triggers: ?Array<Trigger>;
    tags: ?Array<string>;
    pages: ?number;
    subscribedTags: ?Array<string>;
|};

class TriggerListContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        triggers: null,
        tags: null,
        pages: null,
        subscribedTags: null,
    };

    componentDidMount() {
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps: Props) {
        this.getData(nextProps);
    }

    async getData(props: Props): Promise<void> {
        const { location, moiraApi } = props;
        const { page, tags } = this.parseSearch(location.search);

        const triggerList = await moiraApi.getTriggerList(
            (Number(page) || 1) - 1,
            queryString.stringify({ tags: tags }, { arrayFormat: 'index', encode: true })
        );

        const tagList = await moiraApi.getTagList();
        const settings = await moiraApi.getSettings();

        const pages = Math.ceil(triggerList.total / triggerList.size);
        const subscribedTags = flatten(settings.subscriptions.map(x => x.tags));
        this.setState({
            loading: false,
            triggers: triggerList.list,
            tags: tagList.list,
            subscribedTags,
            pages,
        });
    }

    async removeTriggerMetric(triggerId: string, metric: string): Promise<void> {
        const { moiraApi } = this.props;
        this.setState({ loading: true });
        const status = await moiraApi.delMetric(triggerId, metric);
        if (status === 200) {
            this.getData(this.props);
        }
    }

    async setTriggerMetricMaintenance(triggerId: string, maintenance: Maintenance, metric: string): Promise<void> {
        const { moiraApi } = this.props;
        const maintenanceTime = getMaintenanceTime(maintenance);
        const data = {};
        this.setState({ loading: true });
        if (maintenanceTime > 0) {
            data[metric] = moment.utc().add(maintenanceTime, 'minutes').unix();
        }
        else {
            data[metric] = maintenanceTime;
        }
        const status = await moiraApi.setMaintenance(triggerId, data);
        if (status === 200) {
            this.getData(this.props);
        }
    }

    parseSearch(search: string): { [key: string]: string | Array<string> } {
        return queryString.parse(search, { arrayFormat: 'index' });
    }

    buildSearch(search: { [key: string]: string | number | Array<string> }): string {
        return '?' + queryString.stringify(search, { arrayFormat: 'index', encode: true });
    }

    changeSearch(update: { [key: string]: string | number | Array<string> }) {
        const { location, history } = this.props;
        const search = {
            ...this.parseSearch(location.search),
            ...update,
        };
        history.push(this.buildSearch(search));
    }

    render(): React.Element<*> {
        const { loading, triggers, tags: allTags = [], pages, subscribedTags = [] } = this.state;
        const { location } = this.props;
        const { page, tags: parsedSelectedTags } = this.parseSearch(location.search);
        const selectedTags = Array.isArray(parsedSelectedTags) ? parsedSelectedTags : [];

        return (
            <Layout loading={loading}>
                <Layout.GreyPlate>
                    <TagSelector
                        selectedTags={selectedTags}
                        subscribedTags={difference(subscribedTags, selectedTags)}
                        remainedTags={difference(allTags, concat(selectedTags, subscribedTags))}
                        onSelect={tag => this.changeSearch({ tags: concat(selectedTags, tag) })}
                        onRemove={tag => this.changeSearch({ tags: difference(selectedTags, [tag]) })}
                    />
                </Layout.GreyPlate>
                <Layout.Content>
                    <TriggerList
                        items={Array.isArray(triggers) ? triggers : []}
                        onChange={(triggerId, maintenance, metric) =>
                            this.setTriggerMetricMaintenance(triggerId, maintenance, metric)}
                        onRemove={(triggerId, metric) => this.removeTriggerMetric(triggerId, metric)}
                    />
                </Layout.Content>
                {typeof pages === 'number' &&
                    pages > 1 &&
                    <Layout.Paging>
                        <Paging
                            activePage={Number(page) || 1}
                            pagesCount={pages}
                            onPageChange={page => this.changeSearch({ page })}
                        />
                    </Layout.Paging>}
            </Layout>
        );
    }
}

export default withMoiraApi(TriggerListContainer);
