// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { Settings as SettingsType } from '../Domain/Settings';
import type { IMoiraApi } from '../Api/MoiraAPI';

type Props = ContextRouter & { api: IMoiraApi };
type State = {
    loading: boolean;
    settings: ?SettingsType;
};

// Отвечает за
// ~ получение контактов и подписок пользователя и отправку их на вывод
// - управление контактами
// - управление подписками

export default class Settings extends React.Component {
    props: Props;
    state: State;

    constructor() {
        super();
        this.state = {
            loading: true,
            settings: null,
        };
    }

    componentDidMount() {
        this.getTriggers();
    }

    async getTriggers(): Promise<void> {
        const { api } = this.props;
        const settings = await api.settings.get();
        this.setState({ loading: false, settings });
    }

    renderUserContacts(): React.Element<*> {
        // ToDo: вынести в отдельный компонент
        const { contacts } = this.state.settings;
        const contactList = contacts.map(contact => (
            <li key={contact.id}>{contact.type}: {contact.value}</li>
        ));
        return <ul>{contactList}</ul>;
    }

    render(): React.Element<*> {
        const { loading } = this.state;
        return (
            <div>
                {loading && <p>Loading...</p>}
                {!loading && this.renderUserContacts()}
            </div>
        );
    }
}
