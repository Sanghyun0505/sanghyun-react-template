import { PropsWithChildren } from "@/stories/core";
import GlobalStyle from "@/stories/core/design-token/GlobalStlye";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/store/store";

const Provider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <RecoilRoot>
          <BrowserRouter>
            <GlobalStyle />
            <>{children}</>
          </BrowserRouter>
        </RecoilRoot>
      </ReduxProvider>
    </QueryClientProvider>
  );
};

export default Provider;
