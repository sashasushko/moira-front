// @flow
import React from 'react';
import Loader from 'retail-ui/components/Loader';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import type { Settings } from '../Domain/Settings';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import { Container } from '../Components/Layout/Layout';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    settings: ?Settings;
|};

class SettingsContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        settings: null,
    };

    componentDidMount() {
        this.getData();
    }

    async getData(): Promise<void> {
        const { moiraApi } = this.props;
        const settings = await moiraApi.getSettings();
        this.setState({ loading: false, settings });
    }

    render(): React.Element<*> {
        const { loading, settings } = this.state;
        return (
            <Loader active={loading}>
                {!loading &&
                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <Container>
                            <pre>{JSON.stringify(settings, null, 2)}</pre>
                        </Container>
                    </div>}
            </Loader>
        );
    }
}

export default withMoiraApi(SettingsContainer);
