import { CheckIcon } from '@/assets/icons';
import { Typography } from '@/components';

interface SelectableCardListProps {
  items: {
    content: string | React.ReactNode;
  }[];
  onClick: (itemContent: string | React.ReactNode) => void;
}

export const SelectableCardList: React.FC<SelectableCardListProps> = ({ items, onClick }: SelectableCardListProps) => {
  const handleCardClick = (itemContent: string | React.ReactNode) => {
    onClick(itemContent); // Pass the clicked card's content to the onClick handler
  };

  return (
    <div>
      {items.map((item, index) => (
        <button className="w-full group" onClick={() => handleCardClick(item.content)} key={`card${index + 1}`}>
          <div className="p-4xs relative flex items-center justify-between rounded-md gap-4xs group-focus:bg-purple-10 group-hover:bg-purple-10 shadow-[0_0_7.9px_0_rgba(0,88,255,0.10)] mb-4xs">
            <Typography type="title3" className="text-gray-50">
              {item.content}
            </Typography>
            {/* <CheckIcon className="fill-gray-40 group-focus:fill-purple-40 group-hover:fill-purple-40" /> */}
            <CheckIcon className="fill-gray-40 group-focus:fill-purple-40 group-hover:fill-purple-40" />
          </div>
        </button>
      ))}
    </div>
  );
};
SelectableCardList.displayName = 'SelectableCardList';
