import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  > Button {
    width: 256px;
  }

  Text {
    margin-bottom: 38px;
  }
`;
