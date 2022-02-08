import styled, { css } from 'styled-components';

export const cleanButton = css`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-decoration: none;
`;

export const StyledNav = styled.button`
  ${cleanButton};
  background: ${({ color }) => color};
  width: 48%;
  height: 48px;
  padding: 10px 18px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  :hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
`;
