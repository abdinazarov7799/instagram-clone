import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import {useSettingsStore} from "./settingsStore.jsx";
import {get} from "lodash";
const setIsLogin = useSettingsStore(state => get(state, 'setIsLogin', () => {}));
let authStore = (set) => ({
    users: [],
    addUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
    logOut: () => {
        set(() => ({ users: null }));
        setIsLogin(false);
    }
})

authStore = devtools(authStore)
authStore = persist(authStore, {name: 'auth'});
export const useAuthStore =  create(authStore);
