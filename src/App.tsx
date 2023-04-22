import { QueryClient, QueryClientProvider } from "react-query";
import ChatMain from "./components/ChatMain";

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <ChatMain />
            </div>
        </QueryClientProvider>
    );
}

export default App;
