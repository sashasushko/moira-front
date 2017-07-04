// @flow

export default function parsePathSearch(
    path: string
): { [key: string]: ?(string | number) } {
    const obj = {};
    path.slice(1).split('&').map(i => {
        const key = i.split('=')[0];
        const value = i.split('=')[1];
        obj[key] = isNaN(Number.parseFloat(value))
            ? value
            : Number.parseFloat(value);
    });
    return obj;
}
