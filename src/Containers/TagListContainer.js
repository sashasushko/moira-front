// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import type { TagStat } from '../Domain/Tag';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import Layout from '../Components/Layout/Layout';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    error: boolean;
    list: ?Array<TagStat>;
|};

class TagListContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        error: true,
        list: null,
    };

    componentDidMount() {
        this.getData();
    }

    async getData(): Promise<void> {
        const { moiraApi } = this.props;
        try {
            const stats = await moiraApi.getTagStats();
            this.setState({ loading: false, ...stats });
        }
        catch (error) {
            this.setState({ error: true });
        }
    }

    render(): React.Element<*> {
        const { loading, error, list } = this.state;
        return (
            <Layout loading={loading} loadingError={error}>
                <Layout.Content>
                    <pre>{JSON.stringify(list, null, 2)}</pre>
                </Layout.Content>
            </Layout>
        );
    }
}

export default withMoiraApi(TagListContainer);
