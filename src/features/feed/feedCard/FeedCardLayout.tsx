import type { ReactNode } from 'react';

interface FeedCardLayoutProps {
  header: ReactNode;
  body: ReactNode;
}

const FeedCardLayout = ({ header, body }: FeedCardLayoutProps) => {
  return (
    <div className="flex flex-col gap-4xs">
      {header}
      <div className="relative">
        <div className="absolute top-0 left-3xs right-0 bottom-0 w-1 bg-gray-10 rounded-full" />
        <div className="flex flex-col gap-sm">{body}</div>
      </div>
    </div>
  );
};

export default FeedCardLayout;
