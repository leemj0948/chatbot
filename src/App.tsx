import ChatMain from "./components/ChatMain";

function App() {
    const api = import.meta.env.VITE_APP_openai_API_KEY;
    console.log(api);
    return (
        <div className="App">
            <ChatMain />
        </div>
    );
}

export default App;
