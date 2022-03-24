import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExchangeDetailView from './Pages/ExchangeDetailView';
import MainPage from './Pages/MainPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/coingecko/:id" element={<ExchangeDetailView />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
