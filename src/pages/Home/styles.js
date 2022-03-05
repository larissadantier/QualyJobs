import styled from 'styled-components';
import backgroundImg from '../../assets/backgroundImg.png';

export const Container = styled.div`
  margin-top: 34px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  height: 100%;
  min-height: 138px;

  background-image: url(${backgroundImg});
  border-radius: 8px;

  padding: 16px;
`;

export const Aside = styled.aside`
  margin-top: 44px;
`;

export const SearchContainer = styled.div`
  margin-top: 30px;

  strong {
    font-family: 'Poppins', sans-serif;
    display: block;
    font-size: 14px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray.main};

    margin-bottom: 8px;
  }
`;
