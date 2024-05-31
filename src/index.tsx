import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootStackNav from "./navigation/RootStackNavigator";

// Create a client
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootStackNav />
    </QueryClientProvider>
  );
}
