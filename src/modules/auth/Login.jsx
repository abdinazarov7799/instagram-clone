import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {useAuthStore} from "../../store/useAuth.jsx";
import {useSettingsStore} from "../../store/settingsStore.jsx";
import {useState} from "react";
import {customMessage} from "../../components/Message/Message.jsx";
import Logo from "../../assets/icons/Logo-Instagram.png";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {get, isEqual} from "lodash";
import React from "react";


const LoginForm = styled.div`
  width: 100%;
  margin: 15px auto 0 auto;
  text-align: center;
  max-width: 360px;
  border: 2px solid #e4e6eb;
  padding: 0 35px 35px 35px;

  button[type=submit] {
    background-color: #0095F6;
    color: #fff;
    width: 100%;
    padding: 5px;
    border: 1px solid transparent;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
  }
`
const FormInput = styled.div`
  margin: 7px 0;

  input {
    width: 100%;
    padding: 7px;
    font-size: 12px;
    background-color: #fafafa;
    border: 1px solid #e4e6eb;
    border-radius: 3px;

    &:focus {
      border: 1px solid #737373;
      outline: none;
    }
  }
`
const Description = styled.div`
  margin: 0 auto;
  padding: 15px 0;
  font-size: 12px;
  color: #737373;
  width: 90%;

  a {
    text-decoration: none;
    color: #00376B;
  }
`
const initialFormData = {
    phoneNumber: '',
    password: ''
}
const Login = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const users = useAuthStore(state => get(state, 'users', []));
    const setIsLogin = useSettingsStore(state => get(state, 'setIsLogin', () => {}));
    const setUserData = useSettingsStore(state => get(state, 'setUserData', () => {}));
    const [formData, setFormData] = useState(initialFormData);

    const onChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const foundUser = users.find((user) =>
            isEqual(get(user, "phoneNumber"), get(formData, "phoneNumber")) &&
            isEqual(get(user, "password"), get(formData, "password"))
        );
        console.log(foundUser)
        if (foundUser) {
            setIsLogin(true);
            setUserData(foundUser)
            navigate("/");
            customMessage('success', "Login successful")
        } else {
            customMessage('error', "Login error")
        }
    }
    return (
        <>
            <LoginForm>
                <div className='mt-2'>
                    <img src={Logo} width={190} height={110} alt={"instagram image"}/>
                </div>
                <form onSubmit={onSubmit}>
                    <FormInput>
                        <input type="number"
                               name="phoneNumber"
                               onChange={onChange}
                               placeholder={t("phoneNumber")}
                               required
                        />
                    </FormInput>
                    <FormInput>
                        <input type="password"
                               name="password"
                               onChange={onChange}
                               placeholder={t("password")}
                               required
                        />
                    </FormInput>
                    <button type={"submit"} className='mt-2'>
                        {t("login")}
                    </button>
                    <Description>
                        <a href="#">{t("forgetPassword")}</a>
                    </Description>
                </form>
            </LoginForm>
            <LoginForm>
                <div className="pt-4">
                    <p>{t('dontHaveAnAccount')}
                        <Link className="text-decoration-none"
                              to="/sign-up">
                            {' ' + t("signup")}
                        </Link>
                    </p>
                </div>
            </LoginForm>
        </>
    )
}
export default Login;
