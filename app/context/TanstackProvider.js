"use client";

const { QueryClient, QueryClientProvider } = require("@tanstack/react-query");

// Query client
const queryClient = new QueryClient();

const TanstackProvider = ({ children }) => {
   return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
   );
};

export default TanstackProvider;
