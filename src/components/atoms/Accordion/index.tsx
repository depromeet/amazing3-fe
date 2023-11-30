import React from 'react';
import * as HeadlessAccordion from '@radix-ui/react-accordion';

export interface AccordionProps {
  items: {
    value: string;
    triggerContent: React.ReactNode;
    content: React.ReactNode;
  }[];
  renderTriggerIcon?: (state: string) => React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ items = [], renderTriggerIcon }) => (
  <HeadlessAccordion.Root
    className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue={items[0]?.value}
    collapsible
  >
    {items.map((item) => (
      <AccordionItem key={item.value} value={item.value}>
        <AccordionTrigger renderIcon={renderTriggerIcon}>{item.triggerContent}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </AccordionItem>
    ))}
  </HeadlessAccordion.Root>
);

const AccordionItem: React.FC<HeadlessAccordion.AccordionItemProps> = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <HeadlessAccordion.Item {...props} ref={forwardedRef as React.RefObject<HTMLDivElement>}>
      {children}
    </HeadlessAccordion.Item>
  ),
);
AccordionItem.displayName = 'AccordionItem';

interface AccordionTriggerProps extends HeadlessAccordion.AccordionTriggerProps {
  renderIcon?: (state: string) => React.ReactNode;
}

const AccordionTrigger: React.FC<AccordionTriggerProps> = React.forwardRef(
  ({ children, renderIcon, ...props }, forwardedRef) => {
    const buttonRef = forwardedRef as React.RefObject<HTMLButtonElement>;

    return (
      <HeadlessAccordion.Header className="flex">
        <HeadlessAccordion.Trigger {...props} ref={buttonRef}>
          {children}
          {renderIcon && renderIcon('data-state')}
        </HeadlessAccordion.Trigger>
      </HeadlessAccordion.Header>
    );
  },
);
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent: React.FC<HeadlessAccordion.AccordionContentProps> = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <HeadlessAccordion.Content {...props} ref={forwardedRef as React.RefObject<HTMLDivElement>}>
      <div className="py-[15px] px-5">{children}</div>
    </HeadlessAccordion.Content>
  ),
);
AccordionContent.displayName = 'AccordionContent';

export default Accordion;
