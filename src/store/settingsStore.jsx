import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

let settingsStore = (set) => ({
    lang: 'en',
    setLang: (lang) => set(state => ({...state, lang})),
    theme: 'light',
    setTheme: (theme) => set(state => ({...state, theme})),
    isLogin: false,
    setIsLogin: (isLogin) => set(state => ({...state, isLogin})),
    userData: {},
    setUserData: (userData) => set(state => ({...state, userData}))
})

settingsStore = devtools(settingsStore)
settingsStore = persist(settingsStore, {name: 'settings'});

export const useSettingsStore = create(settingsStore)

