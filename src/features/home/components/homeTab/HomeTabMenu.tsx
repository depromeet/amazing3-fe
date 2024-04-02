import type { FC, InputHTMLAttributes, LabelHTMLAttributes, MouseEventHandler, SVGProps } from 'react';

interface HomeTabMenuProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onClick'>,
    Pick<InputHTMLAttributes<HTMLInputElement>, 'onClick'> {
  Icon: FC<SVGProps<SVGSVGElement>>;
  active?: boolean;
  onClick: MouseEventHandler<HTMLInputElement>;
}

export const HomeTabMenu = ({ Icon, htmlFor, className, onClick }: HomeTabMenuProps) => {
  return (
    <>
      <input type="radio" name="homeTabMenu" className={`${className} hidden`} id={htmlFor} onClick={onClick} />
      <label className={`flex justify-center items-center rounded-sm cursor-pointer ${className}`} htmlFor={htmlFor}>
        <Icon />
      </label>
    </>
  );
};
