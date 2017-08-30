// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import type { Pattern } from '../Domain/Pattern';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import Layout from '../Components/Layout/Layout';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    list: ?Array<Pattern>;
|};

class PatternListContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        list: null,
    };

    componentDidMount() {
        this.getData();
    }

    async getData(): Promise<void> {
        const { moiraApi } = this.props;
        const patterns = await moiraApi.getPatternList();
        this.setState({ loading: false, ...patterns });
    }

    render(): React.Element<*> {
        const { loading, list } = this.state;
        return (
            <Layout loading={loading}>
                <Layout.Content>
                    <pre>
                        {JSON.stringify(list, null, 2)}
                    </pre>
                </Layout.Content>
            </Layout>
        );
    }
}

export default withMoiraApi(PatternListContainer);
