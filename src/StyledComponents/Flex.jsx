import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 3rem;
`;

export default Flex;
