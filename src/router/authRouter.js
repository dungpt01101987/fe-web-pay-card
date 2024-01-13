import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { FORGOT_PASSWORD_PATH, SIGN_IN_PATH, SIGN_UP_PATH } from "../constant/authPath";
import Auth from "../page/Auth";
import NotFound from "../page/NotFound";
import SignIn from "../page/Auth/SignIn";
import SignUp from "../page/Auth/SignUp";
import ForgotPassword from "../page/Auth/ForgotPassword";

export const authRouter = createBrowserRouter([
    {
        path: SIGN_IN_PATH,
        element: <Auth />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <SignIn />
            },
            {
                path: SIGN_UP_PATH,
                element: <SignUp />
            },
            {
                path: FORGOT_PASSWORD_PATH,
                element: <ForgotPassword />
            }
        ],
    },
]);