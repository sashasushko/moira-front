// @flow

export type ContactConfig = {|
    type: string;
    validation: string;
    title?: string;
    img?: string;
    icon?: string;
    help?: string;
|};

export type Config = {|
    api_url: string;
    contacts: Array<ContactConfig>;
    paging: {|
        size: number;
    |};
    event_history: {|
        paging: {|
            size: number;
        |};
    |};
|};
