import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Paths } from "../../routers/index.js";

import styled from "@emotion/styled";
import { Color, mixinFontParams } from "../../styles/style_constants.js";

import DateNow from "../Elements/DateNow/DateNow.jsx";
import Clock from "../Elements/Clock/Clock.jsx";

import { logout, selectCurrent } from "../../app/features/userSlice.js";

import ProfUser from "../Elements/ProfUser/ProfUser.jsx";
import Icon from "../Elements/Icons/Icon.jsx";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const current = useSelector(selectCurrent);

  const isLogin = location.pathname !== Paths.LOGIN_ROUTE;
  const isMain = location.pathname !== Paths.MAIN_ROUTE;

  let lastName = "";
  let firstName = "";
  let surName = "";
  let avatarUrl = "";

  if (current) ({ lastName, firstName, surName, avatarUrl } = current);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate(Paths.LOGIN_ROUTE);
  };

  return (
    <HeaderStyled>
      {!current ? (
        <HeaderNav>
          <Icon href="../../icon.svg#logout" />
          <LogoLink to={Paths.LOGIN_ROUTE}>TeleKIT</LogoLink>
          <Icon href="../../icon.svg#back" />
        </HeaderNav>
      ) : (
        <HeaderNav>
          {isLogin ? (
            <Icon href="../../icon.svg#logout" active onClick={handleLogout} />
          ) : (
            <Icon href="../../icon.svg#logout" />
          )}
          <LogoLink to={Paths.MAIN_ROUTE} replace>
            TeleKIT
          </LogoLink>
          {isMain && isLogin ? (
            <Icon
              href="../../icon.svg#back"
              active
              onClick={() => navigate(-1)}
            />
          ) : (
            <Icon href="../../icon.svg#back" />
          )}
        </HeaderNav>
      )}
      <HeadContainer>
        <AuthUser>
          {current && isLogin ? (
            <ProfUser
              firstName={firstName}
              lastName={lastName}
              surName={surName}
              avatarURL={avatarUrl}
            />
          ) : (
            ""
          )}
        </AuthUser>
        <DateNow />
        <Clock />
      </HeadContainer>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: ${Color.gradient_bg};
`;

const HeaderNav = styled.div`
  width: 290px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeadContainer = styled.div`
  width: calc(100vw - 330px);
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AuthUser = styled.div`
  width: 27.33vw;
  text-align: left;
  color: ${Color.body_text};
  ${mixinFontParams({ size: "1.4rem", weight: 600 })}
`;

const LogoLink = styled(Link)`
  text-decoration-line: none;
  cursor: pointer;
  color: ${Color.body_text};
  ${mixinFontParams({ size: "2rem", weight: 600 })}
  transition: all 0.2s ease-out;
  padding-top: 1px;

  &:hover {
    color: #ffffff7f;
    text-decoration-line: none;
  }
`;
