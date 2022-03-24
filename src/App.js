import { CacheProvider } from './CacheContext';
import Router from './Router';

document.title = 'Directory of Cryptocurrency Exchanges';

function App() {
  return (
    <div className="App">
      <CacheProvider>
        <Router />
      </CacheProvider>
    </div>
  );
}

export default App;
