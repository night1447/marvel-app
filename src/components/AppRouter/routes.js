import {lazy} from "react";

const PageError = lazy(() => import("../pages/PageError"));
const Home = lazy(() => import("../pages/Home"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComicPage = lazy(() => import("../pages/SingleComicPage"));

export const routesNames = {
    HOME: "/",
    COMICS: "/comics",
    NO_MATCH: '*',
    SINGLE_COMIC: '/comics/:comicId'
}

export const routesComponents = {
    HOME: <Home/>,
    COMICS: <ComicsPage/>,
    NO_MATCH: <PageError/>,
    SINGLE_COMIC: <SingleComicPage/>
}

export let infoRoutes = [];
for (let key in routesNames) {
    infoRoutes.push({
        path: routesNames[key],
        component: routesComponents[key],
    })
}
