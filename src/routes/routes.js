import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {path:'/', 
    element:<Main></Main>,
    children:[
        {path:'/', 
        loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home> },
        {path:'/home', 
        loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home> },
        {path:'/home/quiz/:topicId', 
        loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
        },
        element: <Quiz></Quiz>,
        errorElement: <ErrorElement></ErrorElement>},
        {path:'/statistics', 
        loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistics></Statistics> },
        {path:'/blog', element: <Blog></Blog> },
    ]
    }, 
    {path:'*', element: <NotFound></NotFound>}
])