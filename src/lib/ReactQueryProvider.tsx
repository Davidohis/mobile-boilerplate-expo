import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChildrenProps } from 'src/types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1
    }
  }
});

const ReactQueryProvider: FC<ChildrenProps> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
