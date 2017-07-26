// @flow
import React from 'react';
import Icon from 'retail-ui/components/Icon';
import ColorHash from 'color-hash';
import classNames from 'classnames/bind';
import styles from './Tag.less';

const cx = classNames.bind(styles);
type Props = {|
    title: string;
    onRemove?: () => void;
|};

type ColorTheme = {|
    backgroundColor: string;
    color: string;
|};

export default function Tag(props: Props): React.Element<*> {
    const { title, onRemove } = props;

    function getColor(): ColorTheme {
        const getBgColor = new ColorHash({ lightness: 0.6, saturation: 0.25 });
        const getTextColor = new ColorHash({ lightness: 0.98, saturation: 0 });
        return {
            backgroundColor: getBgColor.hex(title),
            color: getTextColor.hex(title),
        };
    }

    return (
        <div className={cx({ tag: true, controlled: onRemove })} style={getColor()}>
            {title}
            {onRemove &&
                <div className={styles.control} onClick={onRemove}>
                    <Icon name='Delete' />
                </div>}
        </div>
    );
}
