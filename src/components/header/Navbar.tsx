import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Dropdown, NavItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { deleteAdminFromLocalStorage } from "@/redux/actions/adminActions";
import { deleteUserFromLocalStorage } from "@/redux/actions/userActions";
import { userSlice } from "@/redux/reducers/userReducer";
import getUser from "@/redux/selectors/authSelectors";
import getQuantity from "@/redux/selectors/cartSelectors";
import { currentUserExist } from "@/services/auth.service";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import navbar from "@/constants/navbar";
import style from "./navbar.module.scss";
import LoginForm from "../forms/login-form/loginForm";
import RegistrationForm from "../forms/registration-form/RegistrationForm";

export default function Navbar(): ReturnType<React.FC> {
  const { user } = useAppSelector(getUser);
  const { itemInCart } = useAppSelector(getQuantity);
  const itemsQuantity = itemInCart.length;
  const { signInUserInLocalStorage } = userSlice.actions;
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const handleClick = (e: string): void => navigate(e);

  useEffect(() => {
    if (currentUserExist()) {
      dispatch(signInUserInLocalStorage());
    }
  }, []);

  const onLogout = () => {
    dispatch(deleteAdminFromLocalStorage());
    dispatch(deleteUserFromLocalStorage());
    navigate("/home");
  };

  return (
    <nav>
      <ul className={style.list}>
        <NavLink className={style.item} to="/home">
          Home
        </NavLink>

        <Dropdown className={style.dropdown}>
          <Dropdown.Toggle className={style.btn} variant="dark" id="dropdown-basic">
            Products
          </Dropdown.Toggle>
          <Dropdown.Menu className={style.dropdownMenu}>
            {navbar.map(({ route, title }) => (
              <Dropdown.Item
                key={title}
                as={NavItem}
                onClick={() => {
                  handleClick(route);
                }}
                className={style.dropdownItem}
              >
                {title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <NavLink className={style.item} to="/about">
          About
        </NavLink>

        {user ? (
          <>
            <NavLink className={style.item} to="/profile">
              <FontAwesomeIcon className={style.icon} icon={faUser} />
              User
            </NavLink>
            <NavLink className={style.item} to="/cart">
              <FontAwesomeIcon className={style.icon} icon={faShoppingCart} />
              <span>{itemsQuantity || "Cart"}</span>
            </NavLink>
            <button className={style.item} type="button" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <LoginForm />
            <RegistrationForm />
          </>
        )}
      </ul>
    </nav>
  );
}
