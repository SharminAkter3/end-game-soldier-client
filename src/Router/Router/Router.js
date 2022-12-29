import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import PostDetails from "../../Pages/Home/Post/PostDetails";
import Media from "../../Pages/Media/Media";
import Message from "../../Pages/Message/Message";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://y-eight-pi.vercel.app/posts')
            },
            {
                path: '/posts/:id',
                element: <PostDetails></PostDetails>,
                loader: ({ params }) => fetch(`https://y-eight-pi.vercel.app/posts/${params.id}`)
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/message',
                element: <Message></Message>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]

    }
]);

export default router;