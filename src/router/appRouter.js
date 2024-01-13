import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { SIGN_IN_PATH } from "constant/authPath";
import Home from 'page/Application/Home';
import NotFound from 'page/NotFound';

export const appRouter = createBrowserRouter([
    {
        path: SIGN_IN_PATH,
        element: <Home />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ],
    },
]);