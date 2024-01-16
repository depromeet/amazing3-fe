import type { PropsWithChildren, ReactNode } from 'react';

interface FormLayoutProps {
  header: ReactNode;
  body: ReactNode;
  footer: ReactNode;
}

export const FormLayout = ({ header, body, footer }: PropsWithChildren<FormLayoutProps>) => {
  return (
    <div className="pt-5xs pb-xs px-xs h-full flex flex-col justify-between">
      {header}
      {body}
      {footer}
    </div>
  );
};
