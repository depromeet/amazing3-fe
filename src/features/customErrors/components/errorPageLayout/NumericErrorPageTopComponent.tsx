import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import Error404Image from '@/assets/images/error/404.png';
import Error500Image from '@/assets/images/error/500.png';
import ErrorTextImage from '@/assets/images/error/error.png';

const statusToImage: Record<404 | 500, StaticImport> = {
  404: Error404Image,
  500: Error500Image,
};

interface NumericErrorPageTopComponentProps {
  status: keyof typeof statusToImage;
}

export const NumericErrorPageTopComponent = ({ status }: NumericErrorPageTopComponentProps) => {
  return (
    <div className="flex flex-col gap-2xs items-center">
      <Image src={statusToImage[status]} width={263} height={130} alt={`${status}_error`} />
      <Image src={ErrorTextImage} width={212} height={55} alt="error_text" />
    </div>
  );
};
