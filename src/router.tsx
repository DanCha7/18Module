import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/home";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout";
import Loader from "./components/Loader";
import Review from "./pages/Review";
import { RecipesPage } from "./pages/Recipes";
import { FactsPage } from "./pages/Facts";
import { CombinationsPage } from "./pages/Combinations";
import { HistoryPage } from "./pages/History";
import { BeanPage } from "./pages/BeanPage";
import { BeansPage } from "./pages/Beans";

const router = createBrowserRouter([
    {
        path : "/18Module",
        element : <Layout /> ,
        loader : Loader ,
        children : [{index : true , element : <Home/> },
        {path :"facts" , element : <FactsPage />} , 
        {path : "18Module/beans/bean/:id" , element : <BeanPage/>} , 
        {path : "beans" ,  element :<BeansPage /> } ,
        {path:"*" ,  element: <NotFound />} ,
        {path : "review" ,  element: <Review />},
        {path : "recipes" ,  element: <RecipesPage/>} ,
        {path : "combinations" ,  element : <CombinationsPage />} ,
        {path :"/18Module/history" , element: <HistoryPage /> }

    ],
    }
]);

export default router;