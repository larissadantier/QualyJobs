import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  height: ${({ height }) => `${height}px`};

  padding: 16px;

  outline: none;
  border-radius: 4px;
  border:none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

  &::placeholder{
    color:${({ theme }) => theme.colors.gray.main};
  }
`;
