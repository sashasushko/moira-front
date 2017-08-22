// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import { Container } from '../Components/Layout/Layout';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {||};

class PatternListContainer extends React.Component {
    props: Props;
    state: State;

    render(): React.Element<*> {
        return (
            <Container>
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>Coming soon...</div>
            </Container>
        );
    }
}

export default withMoiraApi(PatternListContainer);
