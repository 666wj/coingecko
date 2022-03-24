import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CacheContext } from '../CacheContext';
import Button from '../StyledComponents/Button';
import Flex from '../StyledComponents/Flex';
import Padding from '../StyledComponents/Padding';
import appTitle from '../Constants/appTitle';
import Title from '../StyledComponents/Title';

const MainPage = () => {
  const { cache } = useContext(CacheContext);
  const navigate = useNavigate();

  return (
    <Padding>
      <Title>{appTitle}</Title>
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
    </Padding>
  );
};

export default MainPage;
