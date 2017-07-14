// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import type { Trigger } from '../Domain/Trigger';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import TriggerEditForm from '../Components/TriggerEditForm/TriggerEditForm';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    trigger: ?Trigger;
|};

class TriggerContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        trigger: null,
    };

    componentDidMount() {
        this.getData();
    }

    async getData(): Promise<void> {
        const { moiraApi } = this.props;
        const { id }: { id: string } = this.props.match.params;
        if (id) {
            const trigger = await moiraApi.getTrigger(id);
            this.setState({ trigger });
        }
        this.setState({ loading: false });
    }

    render(): React.Element<*> {
        const { loading, trigger } = this.state;
        return (
            <div>
                {loading && <p>Loading...</p>}
                {!loading && <TriggerEditForm data={trigger} />}
            </div>
        );
    }
}

export default withMoiraApi(TriggerContainer);