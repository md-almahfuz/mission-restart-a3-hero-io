import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import HomePageContent from '../pages/HomePage/HomePageContent';
import Loading from '../pages/Loading';
import AllApps from '../pages/AllApps';

const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    index: true,
                    element: <HomePageContent></HomePageContent>,

                    loader: async () => {
                        const response = await fetch('/resources/apps.json');
                        if (!response.ok) throw new Error("Failed to load apps");
                        return response.json(); // React Router handles the .json() promise and will throw if it fails, which is caught by the errorElement
                    },
                    // If the loader is still pending when the route is rendered, show the Loading component as a fallback
                    hydrateFallbackElement: <Loading />,
                },
            ],
        },
        {
            path: '/apps',
            element: <AllApps></AllApps>,
            loader: async () => {
                const response = await fetch('/resources/apps.json');
                if (!response.ok) throw new Error("Failed to load apps");
                return response.json(); // React Router handles the .json() promise and will throw if it fails, which is caught by the errorElement
            },
            // If the loader is still pending when the route is rendered, show the Loading component as a fallback
            hydrateFallbackElement: <Loading />,
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