// @flow

export default function parseTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000); // 1000 - для перевода секунд в милисекунды
    return date.toString();
}
