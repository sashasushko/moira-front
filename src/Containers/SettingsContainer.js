// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import type { Config } from '../Domain/Config';
import type { Settings } from '../Domain/Settings';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import SettingsContacts from '../Components/SettingsContacts/SettingsContacts';
import UserSubscribtions from '../Components/UserSubscribtions/UserSubscribtions';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    config: ?Config;
    settings: ?Settings;
|};

class SettingsContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        config: null,
        settings: null,
    };

    componentDidMount() {
        this.getData();
    }

    async getData(): Promise<void> {
        const { moiraApi } = this.props;
        const config = await moiraApi.getConfig();
        const settings = await moiraApi.getSettings();
        this.setState({ loading: false, config, settings });
    }

    render(): React.Element<*> {
        const { loading, config, settings } = this.state;
        return (
            <div>
                {loading && <p>Loading...</p>}
                {!loading &&
                    config &&
                    settings &&
                    <SettingsContacts contactsConfig={config.contacts} userContacts={settings.contacts} />}
                <hr />
                {!loading && settings && <UserSubscribtions subscriptions={settings.subscriptions} />}
            </div>
        );
    }
}

export default withMoiraApi(SettingsContainer);
