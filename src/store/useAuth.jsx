import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import {useSettingsStore} from "./settingsStore.jsx";
import {get} from "lodash";

let authStore = (set) => ({
    users: [],
    addUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
    logOut: () => {
        set(() => ({ users: null }));
    }
})

authStore = devtools(authStore)
authStore = persist(authStore, {name: 'auth'});
export const useAuthStore =  create(authStore);
