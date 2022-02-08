import styled, {css} from 'styled-components';

const Container = styled("div")`
  padding-left: 60px;
  padding-right: 60px;
  @media only screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const TextStyle = styled("div")`
  color: #000;
  ${({ color }) => css`
    color: ${color};
  `}
`;

export const ShapesContainer = styled("div")`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
`;

export default Container;
