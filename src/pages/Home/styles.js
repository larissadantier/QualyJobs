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

export const VacancyContainer = styled.div`
  width: 100%;
  margin-top: 44px;
  display: flex;
`;

export const Aside = styled.aside`
  width: 100%;
  max-width: 379px;
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

export const Vacancy = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 32px;
  padding: 12px;
  background:#FFF;
  border-radius: 4px;

  img {
    border-radius: 4px;
  }
`;

export const VacancyInfo = styled.div`
  display: flex;
  flex-direction:column;
  margin-left: 16px;

  small {
    font-size: 12px;
    font-weight:bold;
  }

  span {
    font-size: 18px;
    margin-top:8px;
    margin-bottom:12px;
  }
  
  strong {
    font-size: 12px;
    width:63px;
    padding: 6px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  margin-left:auto;

  small{
    color: ${({ theme }) => theme.colors.gray.main};
    &:first-child{
      margin-right: 28px;
    }
  }
`;
