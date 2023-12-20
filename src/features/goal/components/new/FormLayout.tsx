import type { PropsWithChildren, ReactNode } from 'react';

interface FormLayoutProps {
  header: ReactNode;
  comment: ReactNode;
  body: ReactNode;
  footer: ReactNode;
}

const FormLayout = ({ header, comment, body, footer }: PropsWithChildren<FormLayoutProps>) => {
  return (
    <div className="pt-5xs px-xs h-full flex flex-col">
      <div className="h-1/2 flex flex-col">
        {header}
        <div className="h-[40%] flex flex-col justify-evenly">{comment}</div>
      </div>
      <div className="h-1/2 flex flex-col">{body}</div>
      {footer}
    </div>
  );
};

export default FormLayout;
