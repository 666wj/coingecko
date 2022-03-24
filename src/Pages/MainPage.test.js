import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '../CacheContext';
import MainPage from './MainPage';
import appTitle from '../Constants/appTitle';

test('renders main page', () => {
  const { getByText } = render(
    <BrowserRouter>
      <CacheProvider value={{ cache: { exchanges: [] } }}>
        <MainPage />
      </CacheProvider>
    </BrowserRouter>
  );

  const title = getByText(appTitle);
  expect(title).toBeInTheDocument();
});
