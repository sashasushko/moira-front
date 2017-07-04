// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { TagStat } from '../Domain/Tag';
import type { IMoiraApi } from '../Api/MoiraAPI';

type Props = ContextRouter & { api: IMoiraApi };
type State = {
    loading: boolean;
    pattern: ?Array<TagStat>;
};

// Отвечает за
// ~ получение информации о тегах и подписках на них и отправку её на выовод
// - удаление тегов
// - отключение подписки
// - удаление подписки

export default class Patterns extends React.Component {
    props: Props;
    state: State;

    constructor() {
        super();
        this.state = {
            loading: true,
            pattern: null,
        };
    }

    componentDidMount() {
        this.getData();
    }

    async getData(): Promise<void> {
        const { api } = this.props;
        const pattern = await api.getPatternList();
        this.setState({ loading: false, pattern: pattern.list });
    }

    renderPatternList(): React.Element<*> {
        // ToDo: вынести в отдельный компонент
        const tagList = this.state.pattern.map((pattern, index) => (
            <li key={index}>{pattern.pattern}</li>
        ));
        return <ul>{tagList}</ul>;
    }

    render(): React.Element<*> {
        const { loading } = this.state;
        return (
            <div>
                {loading && <p>Loading...</p>}
                {!loading && this.renderPatternList()}
            </div>
        );
    }
}
