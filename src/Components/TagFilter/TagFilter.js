// @flow
import React from 'react';
import type { TagList } from '../../Domain/Tag';

// ??? Запрашивать теги в нём или передавать в него? Тем более, что ему ещё нужен settings.json
//     ^^^^^^^^^^^^^^^^^^^^^^

type Props = {|
    data: TagList;
    subscription: Array<string>;
|};

export default function Tag(props: Props): React.Element<*> {
    return <div>Tag Filter</div>;
}
