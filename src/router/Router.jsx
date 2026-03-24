import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import HomePageContent from '../pages/HomePage/HomePageContent';
import AllApps from '../pages/AllApps';
import AppDetails from '../pages/AppDetails';
import InstalledApp from '../pages/InstalledApp';
import NoRoute from '../pages/NoRoute';
import NoApp from '../pages/NoApp';
import Loading from '../components/Loading';


const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            // If the loader is still pending when the route is rendered, show the Loading component as a fallback
            hydrateFallbackElement: <Loading />,
            children: [
                {
                    index: true,
                    element: <HomePageContent></HomePageContent>,

                    loader: async () => {
                        const response = await fetch('/resources/apps.json');
                        if (!response.ok) throw new Error("Failed to load apps");
                        return response.json(); // React Router handles the .json() promise and will throw if it fails, which is caught by the errorElement
                    },

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
            // hydrateFallbackElement: (
            //     <div className="flex justify-center p-20">
            //         <span className="loading loading-ring loading-lg text-[#7C3AED]"></span>
            //     </div>
            // ),
        },

        {

            path: '/apps/:appId',

            element: <AppDetails></AppDetails>,

            loader: async ({ params }) => {
                const response = await fetch(`/resources/apps.json`);
                if (!response.ok) throw new Error("Could not fetch apps data");
                const allApps = await response.json();
                const singleApp = allApps.find(app => app.id.toString() === params.appId);
                if (!singleApp) throw new Error("App not found");
                return singleApp; // Return the specific app data for the AppDetails page

            },

            hydrateFallbackElement: <Loading />,

            errorElement: <NoApp />,

        },

        {
            path: '/installation',
            element: <InstalledApp></InstalledApp>
        },
        {
            path: '/contribution',
            element: <div>Contributions</div>,
        },
        {
            path: "/*",
            element: <NoRoute></NoRoute>,
        },





    ]);

export default Router;