import { LOGOUT_BOTTOM_SHEET_SUBTITLE, LOGOUT_BOTTOM_SHEET_TITLE } from '../../constants';
import MyPageBottomSheet from '../MyPageBottomSheet';

import Footer from './Footer';

interface LogoutBottomSheetProps {
  open: boolean;
  onClose: VoidFunction;
}

export const LogoutBottomSheet = ({ open, onClose }: LogoutBottomSheetProps) => {
  return (
    <MyPageBottomSheet
      open={open}
      onClose={onClose}
      Footer={<Footer onClose={onClose} />}
      title={LOGOUT_BOTTOM_SHEET_TITLE}
      subTitle={LOGOUT_BOTTOM_SHEET_SUBTITLE}
    />
  );
};
