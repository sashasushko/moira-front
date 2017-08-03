// @flow
import React from 'react';
import Paging from 'retail-ui/components/Paging';
import classNames from 'classnames/bind';
import styles from './TriggerPaging.less';

const cx = classNames.bind(styles);
type Props = {|
    activePage: number;
    pagesCount: number;
    onChange: (page: number) => void;
|};

export default function TriggerPaging(props: Props): React.Element<*> {
    const { activePage, pagesCount, onChange } = props;
    return (
        <div className={cx({ paging: true })}>
            <Paging activePage={activePage} pagesCount={pagesCount} onPageChange={page => onChange(page)} />
        </div>
    );
}
