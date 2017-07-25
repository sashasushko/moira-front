// @flow
// ToDo: посмотреть в npm готовое решение
export default function parseTimestamp(timestamp: number): string {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const date = new Date(timestamp * 1000);
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
