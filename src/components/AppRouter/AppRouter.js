import {Route, Routes} from 'react-router-dom';
import {infoRoutes} from './routes'
import {Suspense} from "react";
import Spinner from "../UI/Spinner/Spinner";

const AppRouter = () => {
    return (
        <Suspense fallback={<Spinner/>}>
            <Routes>
            {infoRoutes.map(route =>
                <Route
                    path={route.path}
                    element={route.component}
                    key={route.path}/>)}
        </Routes></Suspense>
    );
}
export default AppRouter;