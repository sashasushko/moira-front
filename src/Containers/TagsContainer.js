// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { TagStat } from '../Domain/Tag';
import type { IMoiraApi } from '../Api/MoiraAPI';

type Props = ContextRouter & { api: IMoiraApi };
type State = {
    loading: boolean;
    stats: ?Array<TagStat>;
};

// Отвечает за
// ~ получение информации о тегах и подписках на них и отправку её на выовод
// - удаление тегов
// - отключение подписки
// - удаление подписки

export default class Tags extends React.Component {
    props: Props;
    state: State;

    constructor() {
        super();
        this.state = {
            loading: true,
            stats: null,
        };
    }

    componentDidMount() {
        this.getData();
    }

    async getData(): Promise<void> {
        const { api } = this.props;
        const stats = await api.tag.list();
        this.setState({ loading: false, stats: stats.list });
    }

    renderTagList(): React.Element<*> {
        // ToDo: вынести в отдельный компонент
        const tagList = this.state.stats.map((tag, index) => (
            <li key={index}>{tag.name}</li>
        ));
        return <ul>{tagList}</ul>;
    }

    render(): React.Element<*> {
        const { loading } = this.state;
        return (
            <div>
                {loading && <p>Loading...</p>}
                {!loading && this.renderTagList()}
            </div>
        );
    }
}
