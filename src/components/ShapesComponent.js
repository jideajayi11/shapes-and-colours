import styled, { css } from 'styled-components';

const Square = styled.div`
  height: 50px;
  width: 50px;
  ${({color}) => color && css`
    background-color: ${color};
  `}
`;

const Rectangle = styled.div`
  height: 50px;
  width: 70px;
  ${({color}) => color && css`
    background-color: ${color};
  `}
`;

const Circle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  ${({color}) => color && css`
    background-color: ${color};
  `}
`;

const Oval = styled.div`
  height: 70px;
  width: 50px;
  border-radius: 50%;
  ${({color}) => color && css`
    background-color: ${color};
  `}
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  ${({color}) => color && css`
    border-bottom: 50px solid ${color};
  `}
`;

const shapes = (shape, color) => {
  const shapeObj = {
    square: <Square color={color} />,
    rectangle: <Rectangle color={color} />,
    round: <Circle color={color} />,
    oval: <Oval color={color} />,
    triangle: <Triangle color={color} />,
  };

  return shapeObj[shape];
};

export default shapes;
