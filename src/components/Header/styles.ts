import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 198px;
  background: #d73035;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 32px;
    color: #fff;
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
    opacity: 0.9;
    color: #fff;

    margin-top: 6px;
  }
`;
