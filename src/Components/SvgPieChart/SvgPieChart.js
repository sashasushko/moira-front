// @flow
import React from 'react';

export default function SvgPieChart(props) {
    console.log(props);

    function getCoords(percent) {
        const x = Math.cos(2 * Math.PI * percent / 100);
        const y = Math.sin(2 * Math.PI * percent / 100);
        return { x, y };
    }

    function composePath(start, end, largeArc) {
        return `M ${start.x} ${start.y} A 1 1 0 ${largeArc ? 1 : 0} 1 ${end.x} ${end.y} L 0 0`;
    }

    function createPathElement(prevPercent, nextPercent, currentPercent, color, i) {
        const startCoords = getCoords(prevPercent);
        const endCoords = getCoords(nextPercent);
        const largeArc = currentPercent > 50;
        return <path key={i} d={composePath(startCoords, endCoords, largeArc)} fill={color} />;
    }

    const path = [];

    props.data.reduce(
        (prev, current, i) => {
            const next = prev.percent + current.percent;
            path.push(createPathElement(prev.percent, next, current.percent, current.color, i));
            return Object.assign({}, current, { percent: next });
        },
        { percent: 0 }
    );

    return (
        <svg viewBox='-1 -1 2 2'>
            {path}
        </svg>
    );
}
