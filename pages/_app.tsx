import { Provider } from "next-auth/client";
import { QueryClient, QueryClientProvider} from "react-query";

const queryClinet = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClinet}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}