import TopBar from "../components/topbar";

const App = () => {
    return (
        <div className='h-full'>
            <TopBar />
            <main className='h-[calc(100%-40px)] w-full flex justify-center items-center'>
                <h1>hello</h1>
            </main>
        </div>
    );
}

export default App;