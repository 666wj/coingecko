import styled from 'styled-components';

const Card = styled.button`
  border: 1px solid #d3d3d3;
  width: ${({ width }) => width || '300px'};
  height: ${({ height }) => height || '150px'};
  border-radius: 5px;
  background: none;
  margin: 0;
  padding: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export default Card;
