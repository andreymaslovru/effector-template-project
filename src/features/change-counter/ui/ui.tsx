import {reflect} from '@effector/reflect';
import {countPlus} from 'entities/counter';
import {CustomButton} from 'shared/ui/atoms/CustomButton';

export const ChangeCounterBtn = reflect({
  view: CustomButton,
  bind: {
    small: true,
    title: 'Plus',
    onPress: () => countPlus(),
  },
});
