// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';

type Props = ContextRouter;
type State = {
    loading: boolean;
    trigger: Trigger | {};
    newTrigger: boolean;
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
            trigger: {},
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
        const trigger: Trigger = await api.trigger.get(id);
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
