import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import PageContents from "../PageContents/PageContents";
import History from "../PageContents/History";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <PageContents></PageContents>
            },
            {
                path: "/history",
                element: <History></History>
            }
        ]
    },
]);