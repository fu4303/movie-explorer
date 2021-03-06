import React from 'react';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const { Search } = Input;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  padding: 0 5vw;
  height: 64px;
  box-shadow: 0 2px 8px #f0f1f2;
  background-color: white;
`;

const RightSection = styled.div`
  flex: 1;
  max-width: 400px;
`;

const StyledIcon = styled(Icon)`
  margin-right: 8px;
  @media (max-width: 992px) { 
    margin-right: 4px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  &:not(:first-of-type) {
    margin-left: 24px;
  }
  @media (max-width: 992px) { 
    &:not(:first-of-type) {
      margin-left: 12px;
    }
  }
`;

type HeaderProps = {
  showSearch?: boolean;
  onSearch?: Function;
}

export default function Header({ showSearch = false, onSearch }: HeaderProps) {
  return (
    <HeaderWrapper>
      <RightSection>
        {
          showSearch ?
            <Search
              placeholder="search movie"
              onSearch={onSearch}
            /> : <StyledLink to="/">Home</StyledLink>
        }
      </RightSection>
      <div>
        <StyledLink to="/list/favorite">
          <StyledIcon type="heart" />Favorite
        </StyledLink>
        <StyledLink to="/list/watch_later">
          <StyledIcon type="clock-circle" />Watch Later
        </StyledLink>
      </div>
    </HeaderWrapper>
  );
}
