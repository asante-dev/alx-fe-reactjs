import react from 'react';
import HomePage from './components/HomePage';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
            </header>
            <main>
                <HomePage />
            </main>
        </div>
    );
}

export default App;