"use client";

import { useRef, useState } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | any>(undefined);
  const [queryClient] = useState(() => new QueryClient());

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>
    <QueryClientProvider client={queryClient} >

    {children}
    </QueryClientProvider>
    </Provider>;
}
