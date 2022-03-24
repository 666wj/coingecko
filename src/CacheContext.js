import { createContext, useEffect, useMemo, useState } from 'react';
import fetchExchanges from './util/fetchExchanges';

const CacheContext = createContext();

const CacheProvider = ({ children }) => {
  const [cache, setCache] = useState({ exchanges: [] });

  useEffect(() => {
    (async () => {
      const fetchedExchanges = await fetchExchanges();
      setCache({
        exchanges: fetchedExchanges,
      });
    })();
  }, []);

  const providerValue = useMemo(() => ({ cache, setCache }), [cache]);

  return (
    <CacheContext.Provider value={providerValue}>
      {children}
    </CacheContext.Provider>
  );
};

export { CacheContext, CacheProvider };
