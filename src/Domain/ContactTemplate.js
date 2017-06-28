// @flow

export type ContactTemplate = {
    type: string;
    validation: string; // ??? может отсутствовать или всегда есть, пусть и пустая строка
    icon?: string;
    img?: string;
    title?: string;
    help?: string;
};
