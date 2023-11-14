import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

let authStore = (set) => ({
    users: [],
    addUser: (newUser) => set((state) => ({ users: [...(state.users || []), newUser] })),
})

authStore = devtools(authStore)
authStore = persist(authStore, {name: 'auth'});
export const useAuthStore =  create(authStore);
