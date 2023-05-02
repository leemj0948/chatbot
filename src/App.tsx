import { QueryClient, QueryClientProvider } from "react-query";
import LandingPage from "./components/LandingPage";
import ChatBg from "./components/ChatBg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/catbot" element={<ChatBg />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
