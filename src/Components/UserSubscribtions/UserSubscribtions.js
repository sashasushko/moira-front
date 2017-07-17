// @flow
import React from 'react';
import type { Subscribtion } from '../../Domain/Subscribtion';
import ContactView from '../Contact/Contact';
import Tag from '../Tag/Tag';

type Props = {|
    subscriptions: Array<Subscribtion>;
|};

export default function UserSubscribtions(props: Props): React.Element<*> {
    const { subscriptions } = props;
    return (
        <div>
            <h3>User subscriptions</h3>
            {subscriptions.map(item => {
                const { id, enabled, contacts, tags } = item;
                return (
                    <div key={id}>
                        Enabled: <div>{enabled ? 'true' : 'false'}</div>
                        Contacts: {contacts.map((item, i) => <ContactView key={i} title={item} />)}
                        Tags: {tags.map((item, i) => <Tag key={i} title={item} />)}
                    </div>
                );
            })}
        </div>
    );
}
