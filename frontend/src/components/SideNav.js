import React from "react";

import styled from "styled-components";

import { MdSearch } from "react-icons/md";

const SideNavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  height: 100%;
  width: 220px;
  background: rgb(0, 89, 171);
  color: white;
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;

  ul {
  }
`;

const Logo = styled.a`
  font-size: 2rem;
  margin: 5px auto;
`;

const Search = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  input {
    padding: 5px;
    height: 30px;
    width: 140px;
    &::placeholder {
      color: gray;
      opacity: 0.5;
    }
  }
  button {
    padding: 5px;
    height: 29px;
    width: 35px;
    background: none;
    outline: none;
    border: none;
    background: white;
    color: black;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.1s background ease-in;
  }
`;

const CateList = styled.ul`
  padding: 0;
  margin: 0;
`;

const SideNav = ({ categories, loading }) => {
  if (loading) {
    return <SideNavWrapper>로딩 중</SideNavWrapper>;
  }
  if (!categories) {
    return null;
  }

  return (
    <SideNavWrapper>
      <Logo>옼끼</Logo>
      <Search>
        <input placeholder="Google 검색" />
        <button>
          <MdSearch />
        </button>
      </Search>

      <CateList>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </CateList>
    </SideNavWrapper>
  );
};

export default SideNav;
