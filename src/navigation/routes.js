import MainNavigation from "./MainNavigation";
import Welcome from "../screens/welcome";
import confirmLogin from "../screens/confirmLogin";

export const rootRoutes = [
    {
        name: "Main",
        component: MainNavigation,
        options: {headerShown: false}
    },
    {
        name: "ConfirmLogin",
        component: confirmLogin,
        options: {headerShown: false}
    }
];

export const mainRoutes = [
    {
        name: "Welcome",
        component: Welcome,
        options: {headerShown: false}
    }
];