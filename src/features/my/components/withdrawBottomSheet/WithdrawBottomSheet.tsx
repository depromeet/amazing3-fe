import { WITHDRAW_BOTTOM_SHEET_SUBTITLE, WITHDRAW_BOTTOM_SHEET_TITLE } from '../../constants';
import MyPageBottomSheet from '../MyPageBottomSheet';

import Footer from './Footer';

interface WithdrawBottomSheetProps {
  open: boolean;
  onClose: VoidFunction;
}

export const WithdrawBottomSheet = ({ open, onClose }: WithdrawBottomSheetProps) => {
  return (
    <MyPageBottomSheet
      open={open}
      onClose={onClose}
      Footer={<Footer onClose={onClose} />}
      title={WITHDRAW_BOTTOM_SHEET_TITLE}
      subTitle={WITHDRAW_BOTTOM_SHEET_SUBTITLE}
    />
  );
};
