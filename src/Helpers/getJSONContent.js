// @flow
export default function getJSONContent(data: { [key: string]: any }): string {
    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2));
}
