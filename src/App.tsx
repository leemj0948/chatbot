import { QueryClient, QueryClientProvider } from "react-query";
import ChatMain from "./components/ChatMain";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/catbot" element={<ChatMain />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
