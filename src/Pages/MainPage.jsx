import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CacheContext } from '../CacheContext';
import Button from '../StyledComponents/Button';
import Flex from '../StyledComponents/Flex';

const MainPage = () => {
  const { cache } = useContext(CacheContext);
  const navigate = useNavigate();

  return (
    <Flex>
      {cache.exchanges.map((exchange) => (
        <Button
          type="button"
          key={exchange.id}
          onClick={() => navigate(`/coingecko/${exchange.id}`)}
        >
          {exchange.name}
        </Button>
      ))}
    </Flex>
  );
};

export default MainPage;
