import { QueryClient, QueryClientProvider } from "react-query";
import LandingPage from "./components/LandingPage";
import ChatBg from "./components/ChatBg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

function App() {
    const queryClient = new QueryClient();
    console.log(import.meta.env.MODE, ",mode");
    console.log(import.meta.env.DEV, ",isDev");
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
