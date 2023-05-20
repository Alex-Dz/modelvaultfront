/*import Vue from 'vue';*/
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView";
import ProfileView from "./views/ProfileView";
import SignUp from "./views/SignUp";
import Login from './views/Login';
import Projects from './views/Projects';
import CreateProject from './views/CreateProjectView';
import ProjectsInfo from "./views/ProjectsInfoView";
import ShowProfileComponent from "./components/ShowProfileComponent";
import EditProfileComponent from "./components/EditProfileComponent";
import Updated from "./views/UpdateView.vue"

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
            path: "/publications",
            name: 'ProjectsView',
            component: Projects
        },
        {
            path: "/crear-proyecto",
            name: 'CreateProjectView',
            component: CreateProject
        },
        {
            path: "/publication/:id",
            name: "ProjectsInfoView",
            component: ProjectsInfo
        },
        {
            path: "/actualizar",
            name: "UpdateView",
            component: Updated
        }
    ]
})