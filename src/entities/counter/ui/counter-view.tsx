import React from 'react';
import {reflect} from '@effector/reflect';
import {CustomText} from 'shared/ui/atoms/CustomText';

import {$count} from '../model';

interface CounterViewProps {
  count?: number;
}

const CounterView: React.FC<CounterViewProps> = ({count = 0}) => {
  return <CustomText h1>{count}</CustomText>;
};

export const Counter = reflect({
  view: CounterView,
  bind: {
    count: $count.map(store => store),
  },
});
