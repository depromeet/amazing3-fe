import CloseIcon from '@/assets/icons/goal/close-icon.svg';

const Header = ({ onClose }: { onClose: VoidFunction }) => (
  <button onClick={onClose} className="float-right">
    <CloseIcon />
  </button>
);

export default Header;
