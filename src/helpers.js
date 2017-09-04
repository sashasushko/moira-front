// @flow
export function roundValue(value: number | string | void): number | string {
    if (typeof value !== 'number') {
        return '—';
    }
    const parsedValue = parseFloat(value.toString());
    const sizes = ['', ' K', ' M', ' G', ' T', ' P', ' E', ' Z', ' Y'];
    if (parsedValue === 0) {
        return '0';
    }
    let x = 0;
    while (Math.pow(1000, x + 1) < Math.abs(parsedValue)) {
        x++;
    }
    let prefix = (parsedValue / Math.pow(1000, x)).toFixed(2).toString();
    if (x === 0) {
        prefix = value.toFixed(2).toString();
    }
    let tailToCut = 0;
    while (prefix[prefix.length - (tailToCut + 1)] === '0') {
        tailToCut++;
    }
    if (prefix[prefix.length - (tailToCut + 1)] === '.') {
        tailToCut++;
    }
    return prefix.substring(0, prefix.length - tailToCut) + (sizes[x] || '');
}

export function getJSONContent(data: { [key: string]: any }): string {
    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2));
}
