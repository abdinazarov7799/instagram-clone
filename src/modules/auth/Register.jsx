import styled from "styled-components";
import Logo from '../../assets/icons/Logo-Instagram.png'
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useAuthStore } from "../../store/useAuth.jsx";
import { customMessage } from "../../components/Message/Message.jsx";
import { get, isEqual } from 'lodash';
import { useNavigate } from "react-router";
import { useSettingsStore } from "../../store/settingsStore.jsx";
import { Link } from "react-router-dom";

const Div = styled.div `
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const RegisterForm = styled.div`
  width: 100%;
  margin: 15px auto 0 auto;
  max-width: 360px;
  text-align: center;
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
    fullName: '',
    userName: '',
    password: ''
}
const Register = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const users = useAuthStore(state => get(state, 'users', []));
    const addUser = useAuthStore(state => get(state, 'addUser', () => {}));
    const setIsLogin = useSettingsStore(state => get(state, 'setIsLogin', () => {}));
    const setUserData = useSettingsStore(state => get(state, 'setUserData', () => {}));
    const [formData, setFormData] = useState(initialFormData);

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const existingUser = users.find(user =>
            isEqual(get(user, "phoneNumber"), get(formData, "phoneNumber")) &&
            isEqual(get(user, "password"), get(formData, "password"))
        );
        if (existingUser) {
            customMessage('error', t("registered"));
        } else {
            addUser(formData);
            setUserData(formData);
            customMessage('success', "Login successful");
            setIsLogin(true);
            navigate("/");
        }
    }

    return (
        <Div>
            <RegisterForm>
                <div className='mt-2'>
                    <img src={Logo} width={190} height={110} alt="Instagram Logo" />
                </div>
                <p style={{
                    width: '85%',
                    fontWeight: 500,
                    color: '#737373',
                    margin: "auto",
                    paddingBottom: '5px'
                }}>
                    {t('signUpToSee')}
                </p>
                <form onSubmit={onSubmit}>
                    <FormInput>
                        <input
                            type="number"
                            name="phoneNumber"
                            onChange={onChange}
                            placeholder={t("phoneNumber")}
                            required
                        />
                    </FormInput>
                    <FormInput>
                        <input
                            type="text"
                            name="fullName"
                            onChange={onChange}
                            placeholder={t("fullName")}
                            required
                        />
                    </FormInput>
                    <FormInput>
                        <input
                            type="text"
                            name="userName"
                            onChange={onChange}
                            placeholder={t("userName")}
                            required
                        />
                    </FormInput>
                    <FormInput>
                        <input
                            type="password"
                            name="password"
                            onChange={onChange}
                            placeholder={t("password")}
                            required
                        />
                    </FormInput>
                    <Description>
                        <p>{t("regDescription")} <a href="#">{t("learnMore")}</a></p>
                        <p>{t("regAgree")}
                            <a href="#"> {t("terms")}, </a>
                            <a href="#"> {t("privacy")} </a>
                            <a href="#"> {t("policy")} </a>
                            {t("and")}
                            <a href="#"> {t("cookiesPolicy")} </a>
                        </p>
                    </Description>
                    <button type="submit">
                        {t("signup")}
                    </button>
                </form>
            </RegisterForm>
            <RegisterForm>
                <div className="pt-4">
                    <p>{t('haveAnAccount')} <Link className="text-decoration-none" to={"/auth/login"}>{t("login")}</Link></p>
                </div>
            </RegisterForm>
        </Div>
    );
}

export default Register;
