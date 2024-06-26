import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AppLayout from '@components/AppLayout'

import Home from '@routes/Home.tsx'

const router = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
    ]
}]);

const App: React.FC = (): JSX.Element => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
