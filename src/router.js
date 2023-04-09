/*import Vue from 'vue';*/
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView";
import SignUp from "./views/SignUp";
import Login from './views/Login';

export default createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: 'HomeView',
            component: HomeView
        },
        {
            path: "/registro",
            name: 'SignUpView',
            component: SignUp
        },
        {
            path: "/iniciar-sesion",
            name: 'LoginView',
            component: Login
        }
    ]
})