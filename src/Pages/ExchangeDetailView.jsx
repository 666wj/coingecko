import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CacheContext } from '../CacheContext';
import Button from '../StyledComponents/Button';
import Flex from '../StyledComponents/Flex';
import Padding from '../StyledComponents/Padding';
import List from '../StyledComponents/List';
import Link from '../StyledComponents/Link';
import Description from '../StyledComponents/Description';

const ExchangeDetailView = () => {
  const { cache } = useContext(CacheContext);
  const { id: selectedExchangeID } = useParams();
  const navigate = useNavigate();

  const {
    name,
    country,
    trust_score_rank: trustRank,
    image,
    year_established: yearEstablished,
    url,
    description,
  } = cache.exchanges.find((exchange) => exchange.id === selectedExchangeID) ||
  {};

  const backToMainPage = () => navigate('/coingecko');

  useEffect(() => {
    if (cache.exchanges.length === 0) {
      backToMainPage();
    }
  }, []);

  return (
    <Padding>
      <Button height="35px" width="fit-content" onClick={backToMainPage}>
        Back to Main Page
      </Button>
      <Flex direction="column">
        <img src={image} alt={name} />
        <Link target="_blank" rel="noreferrer" href={url}>
          Social Media Link
        </Link>
      </Flex>
      <List>
        <li>Name: {name}</li>
        <li>Country: {country}</li>
        <li>Trust Rank: {trustRank}</li>
        <li>Year Established: {yearEstablished}</li>
      </List>
      <Flex direction="column">
        <Description>{description || 'No Descritpion'}</Description>
      </Flex>
    </Padding>
  );
};

export default ExchangeDetailView;
