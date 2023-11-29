import type { PropsWithChildren } from 'react';

import QueryClientProvider from './reactQuery/QueryClientProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return <QueryClientProvider>{children}</QueryClientProvider>;
};

export default Providers;
