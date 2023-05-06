/*import Vue from 'vue';*/
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView";
import SignUp from "./views/SignUp";
import Login from './views/Login';
import Projects from './views/Projects';
import CreateProject from './views/CreateProjectView';
import ProjectsInfo from "./views/ProjectsInfoVirew";

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
            path: "/proyectos", 
            name: 'ProjectsView',
            component: Projects
        },
        {
            path: "/crear-proyecto",
            name: 'CreateProjectView',
            component: CreateProject
        },
        {
            path: "/info-proyecto",
            name: "ProjectsInfoView",
            component: ProjectsInfo
        }
    ]
})