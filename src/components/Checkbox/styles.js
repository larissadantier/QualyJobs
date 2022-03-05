import styled from 'styled-components';

export const Label = styled.label`
  display:flex;
  align-items:center;

  input[type="checkbox"] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .checkbox {
    display: inline-block;
    width: 18px;
    height: 18px;
    padding: 2px;
    border: 1px solid ${({ theme }) => theme.colors.gray.main};
    border-radius: 2px;
    cursor: pointer;
  }

  .checkbox-active {
    background: ${({ theme }) => theme.colors.primary.light};
  }
  
  .text-checkbox {
    margin-left: 10px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
`;

export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
`;
