// @flow
import React from 'react';

type Props = {|
    count: number;
    perPage: number;
    curentPage: number;
    onClick: (selectedPage: number) => void;
|};

export default function Pagination(props: Props): React.Element<*> {
    return <div>Pagination</div>;
}
