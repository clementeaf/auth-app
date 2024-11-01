import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = [
  {
    id: 1,
    name: 'Login',
    path: '/',
    component: Login,
    isProtected: false,
  },
  {
    id: 2,
    name: 'Home',
    path: '/home',
    component: Home,
    isProtected: true,
  },
];

export default routes;
