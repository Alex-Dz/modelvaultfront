/*import Vue from 'vue';*/
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView";
/*import HomeComponent from "./components/HomeComponent";*/
import SignUp from "./views/SignUp";

export default createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: HomeView
        },
        {
            path: "/registro",
            component: SignUp
        }
    ]
})