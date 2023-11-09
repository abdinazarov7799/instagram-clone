import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
let authStore = (set) => ({
    users: [
        {
            phoneNumber: 998937397799,
            fullName: 'Abdinazarov Diyorbek',
            userName: 'abdinazarov',
            password: '123href18'
        }
        ],
    addUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
})

authStore = devtools(authStore)
authStore = persist(authStore, {name: 'auth'});
export const useAuthStore =  create(authStore);
