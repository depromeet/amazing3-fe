import type { PropsWithChildren, ReactNode } from 'react';

interface FormLayoutProps {
  header: ReactNode;
  comment: ReactNode;
  body: ReactNode;
  footer: ReactNode;
}

export const FormLayout = ({ header, comment, body, footer }: PropsWithChildren<FormLayoutProps>) => {
  return (
    <div className="px-xs h-full flex flex-col">
      <div className="h-1/2 flex flex-col">
        <div className="h-[40%] flex flex-col justify-evenly">
          {header}
          {comment}
        </div>
      </div>
      <div className="h-1/2 flex flex-col">{body}</div>
      {footer}
    </div>
  );
};

export default FormLayout;
