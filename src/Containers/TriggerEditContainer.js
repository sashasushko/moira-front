// @flow
import React from 'react';
import Loader from 'retail-ui/components/Loader';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import type { Trigger } from '../Domain/Trigger';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import { Container } from '../Components/Layout/Layout';
import TriggerEditForm from '../Components/TriggerEditForm/TriggerEditForm';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    trigger: ?Trigger;
|};

class TriggerEditContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        trigger: null,
    };

    componentDidMount() {
        this.getData();
    }

    async getData(): Promise<void> {
        const { moiraApi, match } = this.props;
        const { id } = match.params;
        if (typeof id !== 'string') {
            return;
        }
        const trigger = await moiraApi.getTrigger(id);
        this.setState({ loading: false, trigger });
    }

    render(): React.Element<*> {
        const { loading, trigger } = this.state;
        return (
            <Loader active={loading}>
                <Container>
                    {trigger && <TriggerEditForm data={trigger} />}
                </Container>
            </Loader>
        );
    }
}

export default withMoiraApi(TriggerEditContainer);
