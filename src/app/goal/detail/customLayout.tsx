import type { ReactNode } from 'react';

interface LayoutProps {
  header: ReactNode;
  sticker: ReactNode;
  body: ReactNode;
  footer: ReactNode;
}

const CustomLayout = ({ header, sticker, body, footer }: LayoutProps) => {
  return (
    <div className="relative h-screen">
      <div className="absolute w-full h-[330px] bg-gradient-to-b from-transparent to-[#C5E5FF]">
        <div className="flex items-center justify-between p-5xs px-3xs">{header}</div>
        <div className="flex flex-col items-center justify-center flex-shrink-0 h-[272px] p-[136px] rounded-none">
          <div className="absolute w-[227px] h-[227px] bg-[#ffffff66] rounded-xl" />
          {sticker}
        </div>
      </div>

      <div className="absolute w-full top-[320px] bg-white rounded-lg pt-3xs">
        <div className="p-4xs px-sm">{body}</div>
      </div>
      <div className="p-xs absolute w-full bottom-0">{footer}</div>
    </div>
  );
};

export default CustomLayout;
