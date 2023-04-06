import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/HomeView'
import SignUp from './views/SignUp'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/registro",
            name: "signup",
            component: SignUp
        }
    ]
})