// @flow
import React from 'react';
import type { ContactConfig } from '../../Domain/Config';
import type { Contact } from '../../Domain/Contact';
import ContactView from '../Contact/Contact';

type Props = {|
    contactsConfig: Array<ContactConfig>;
    userContacts: Array<Contact>;
|};

export default function Tag(props: Props): React.Element<*> {
    const { contactsConfig, userContacts } = props;
    return (
        <div>
            <h3>User contacts</h3>
            {contactsConfig.map(item => {
                const { type, title } = item;
                return (
                    <div key={type}>
                        {userContacts
                            .filter(item => item.type === type)
                            .map((item, i) => <ContactView key={i} title={item.value} onRemove={() => {}} />)}
                        <label>
                            {title || type} <input type='text' />
                        </label>
                    </div>
                );
            })}
        </div>
    );
}
