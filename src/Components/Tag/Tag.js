// @flow
import React from 'react';
import styles from './Tag.less';
import ColorHash from 'color-hash';

type Props = {|
    title: string;
|};

type ColorTheme = {|
    backgroundColor: string;
    color: string;
|};

export default function Tag(props: Props): React.Element<*> {
    const { title } = props;

    function getColor(): ColorTheme {
        const getBgColor = new ColorHash({ lightness: 0.6, saturation: 0.25 });
        const getTextColor = new ColorHash({ lightness: 0.98, saturation: 0 });
        return {
            backgroundColor: getBgColor.hex(title),
            color: getTextColor.hex(title),
        };
    }

    return (
        <div className={styles.tag} style={getColor()}>
            {title}
        </div>
    );
}
