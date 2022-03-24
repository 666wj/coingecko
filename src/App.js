import { CacheProvider } from './CacheContext';
import Router from './Router';
import appTitle from './Constants/appTitle';

document.title = appTitle;

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
