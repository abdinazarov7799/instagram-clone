import {useTranslation} from "react-i18next";
import styled from "styled-components";
import classes from "./style.module.css";
import leftArrow from '../../assets/icons/left-arrow.png'
import Menu from "../Menu/Menu.jsx";
import {useSettingsStore} from "../../store/settingsStore.jsx";
import {get} from "lodash";
import {searchPost} from "./searchPost";
import {useState} from "react";

const Search = (props) => {
    const { t } = useTranslation();
    const { isOpen, toggle} = props;
    const [resultSearch, setResultSearch] = useState()
    const theme = useSettingsStore(state => get(state, 'theme', () => {}));
    const SearchDiv = styled.div `
      transform: translate(${isOpen ? '0%' : '-200%'});
      transition: transform 0.5s ease-in-out;
      background-color: ${theme === 'dark' ? '#000' : '#fff'};
      color: ${theme !== 'dark' ? '#000' : '#fff'};
        span{
          border-bottom: 1px solid ${theme === 'dark' ? '#808080' : '#e4e6eb'}
        }
    `
    const Input =  styled.input`
      width: 100%;
      outline: none;
      padding: 5px 15px;
      border: 1px solid transparent;
      background-color: ${theme === 'dark' ? '#262626' : '#EFEFEF'};
      color: ${theme !== 'dark' ? '#000' : '#fff'};
      border-radius: 10px;
      margin: 8px 0;
      font-weight: 300;
    `
  return(
      <SearchDiv className={`${classes.Search} ${isOpen ? 'd-block' : 'd-none'}`}>
          <span className="d-flex align-items-center">
              <div className="w-25 me-5 pe-5 d-md-none">
                  <Menu img={leftArrow} toggle={toggle}/>
              </div>
              {t("search")}
          </span>
          <Input type="text" onChange={searchPost} placeholder={t("search")}/>
          <ul className={classes.List}>
              {
                  resultSearch && (
                      resultSearch.map((post) => (
                          <li className={classes.Item} key={post.id}>
                              <img src={post.thumbnail} alt="img" width={44} height={44}/>
                              <p>
                                  <span>{post.brand}</span>
                                  {post.description}
                              </p>
                              <img src={post.thumbnail} alt="img" width={44} height={44}/>
                          </li>
                      ))
                  )
              }
          </ul>
      </SearchDiv>
  );
}
export default Search
