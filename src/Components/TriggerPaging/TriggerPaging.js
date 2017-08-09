// @flow
import React from 'react';
import Paging from 'retail-ui/components/Paging';
import cn from './TriggerPaging.less';

type Props = {|
    activePage: number;
    pageCount: number;
    onChange: (page: number) => void;
|};

export default function TriggerPaging(props: Props): React.Element<*> {
    const { activePage, pageCount, onChange } = props;
    return (
        <div className={cn('paging')}>
            <Paging activePage={activePage} pagesCount={pageCount} onPageChange={page => onChange(page)} />
        </div>
    );
}
