// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { Trigger as TriggerType } from './../Domain/Trigger';
import type { IMoiraApi } from '../Api/MoiraAPI';

type Props = ContextRouter & { api: IMoiraApi };
type State = {
    loading: boolean;
    newTrigger: boolean;
    trigger: ?TriggerType;
};

// Отвечает за
// + получение информации о триггере и передачу её на редактирование
// - получение и обработка отредактированных данных
// - вывод формы добавления и её обработку в случае, если URL пустой или ID не найдён

export default class Trigger extends React.Component {
    props: Props;
    state: State;

    constructor() {
        super();
        this.state = {
            loading: true,
            newTrigger: false,
            trigger: null,
        };
    }

    componentDidMount() {
        this.getTriggerData();
    }

    async getTriggerData(): Promise<void> {
        const { id }: { id: string | void } = this.props.match.params;
        if (!id) {
            this.setState({
                loading: false,
                newTrigger: true,
            });
            return;
        }
        const { api } = this.props;
        const trigger = await api.getTrigger(id);
        this.setState({ loading: false, trigger: trigger });
        this.setState({
            loading: false,
            trigger,
        });
    }

    render(): React.Element<*> {
        const { loading, newTrigger, trigger } = this.state;
        return (
            <div>
                {loading && <p>Loading...</p>}
                {!loading && newTrigger && <p>Adding form</p>}
                {!loading &&
                    !newTrigger &&
                    <p>Trigger <b>{trigger.id}</b> edit form</p>}
            </div>
        );
    }
}
