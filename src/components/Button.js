import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  ${({color, border}) => css`
    background-color: ${color};
    border-color: ${border};
  `}
`;

export const CircledButton = styled(Button)`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 10px;
  ${({active}) => css`
    opacity: ${active ? 1 : 0.2};
  `}
`;

export const OvaledButton = styled(Button)`
  border-radius: 40%;
  min-width: 50px;
  margin-right: 10px;
  margin-top: 10px;
  padding: 5px 10px;
`;

export default Button;
