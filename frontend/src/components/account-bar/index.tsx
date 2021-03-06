import React from "react";
import styled from "styled-components";
import accountImg from "@images/account-black-icon.png";

const AccountBar = (props: any) => {
  return (
    <Wrapper>
      <Img src={accountImg} alt="account" />
      <Name>Hello! {props.user}: )</Name>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-left: 10%;
  margin: 3% 12% 0 12%;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 40px;
`;

const Name = styled.div`
  font-size: 20px;
  padding: 10px 0;
  font-weight: 900;
`;

export default AccountBar;
