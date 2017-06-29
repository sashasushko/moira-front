// @flow

export type ContactConfig = {
    type: string;
    validation: string; // ??? всегда есть, пусть и пустая
    title?: string;
    img?: string;
    icon?: string;
    help?: string;
};

export type Config = {
    api_url: string;
    contacts: Array<ContactConfig>;
    paging: {
        size: number;
    };
    // ??? что за event_history
    event_history: {
        paging: {
            size: number;
        };
    };
};
