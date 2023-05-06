/*import Vue from 'vue';*/
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView";
import ProfileView from "./views/ProfileView";
import SignUp from "./views/SignUp";
import Login from './views/Login';
import Projects from './views/Projects';
import ShowProfileComponent from "./components/ShowProfileComponent";
import EditProfileComponent from "./components/EditProfileComponent";

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
        },
        {
            path: "/profile",
            name: 'ProfileView',
            component: ProfileView,
            children: [
                {
                    path: "",
                    name: "details",
                    component: ShowProfileComponent
                },
                {
                    path: "edit",
                    name: "edit",
                    component: EditProfileComponent
                }
            ]
        },
        {
            path: "/projects",
            name: 'ProjectsView',
            component: Projects
        }
    ]
})