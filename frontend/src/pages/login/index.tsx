import * as React from "react";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import styled from "styled-components";
import puzzleIcon from "@images/main-icon.png";

const Login = () => {
  const history = useHistory();
  const google_id: string = process.env.REACT_APP_CLIENT_ID || "";

  const onLoginSuccess = async (res: any) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: res.profileObj.name,
      }),
    }).then((response) => response.json());

    if (response.code === 200) {
      window.sessionStorage.setItem("id", res.profileObj.name);
      history.push("/main");
    } else {
      window.alert("잘못된 입력입니다!");
    }
  };

  return (
    <Wrapper>
      <Title>BM PUZZLE</Title>
      <Icon src={puzzleIcon} />
      <GoogleLogin
        clientId={google_id}
        render={(renderProps) => (
          <GoogleButton
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <span>Login</span>
          </GoogleButton>
        )}
        icon={false}
        buttonText="Login"
        onSuccess={(result) => onLoginSuccess(result)}
        onFailure={(result) => console.log(result)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: white;
  font-size: 60px;
  font-weight: 900;
  margin-top: 75px;
`;
const Icon = styled.img`
  width: 200px;
  height: 200px;
  margin: 80px 0;
`;

const GoogleButton = styled.button`
  justify-content: center;
  border-radius: 50px;
  height: 45px;
  width: 300px;
  span {
    font-size: 30px;
    color: black;
    padding: 1%;
    font-weight: 900;
  }
  border: none;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export default Login;
