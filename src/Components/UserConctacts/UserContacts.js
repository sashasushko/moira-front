// @flow
import React from 'react';
import type { ContactConfig } from '../../Domain/Config';
import type { Contact } from '../../Domain/Contact';

type Props = {|
    contactsConfig: Array<ContactConfig>;
    userContacts: Array<Contact>;
    onAdd: (type: string, value: string) => void;
    onRemove: (id: string) => void;
|};

export default function UserContacts(props: Props): React.Element<*> {
    return <div>UserContacts</div>;
}
