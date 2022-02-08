import styled from 'styled-components';

const Cover = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 20px 10px 0;

  @media only screen and (max-width: 768px) {
    margin: 5px 10px 5px 0;
  }
`;

export default Cover;
