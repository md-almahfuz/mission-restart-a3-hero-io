import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import HomePageContent from '../pages/HomePage/HomePageContent';

const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    index: true,
                    element: <HomePageContent></HomePageContent>
                }
            ],
        },
        {
            path: '/apps',
            element: <div>Apps</div>,
        },
        {
            path: '/installation',
            element: <div>Installations</div>,
        },
        {
            path: '/contribution',
            element: <div>Contributions</div>,
        },





    ]);

export default Router;