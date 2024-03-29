import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home.jsx'
import { AuthLayoutProtected, Login } from './components/index.js'


import AddPost from "./pages/addPost.jsx";
import Signup from './pages/signUp.jsx'
import EditPost from "./pages/editPost.jsx";

import Post from "./pages/post.jsx";

import AllPosts from "./pages/allPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayoutProtected authentication={false}>
                    <Login />
                </AuthLayoutProtected>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayoutProtected authentication={false}>
                    <Signup />
                </AuthLayoutProtected>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayoutProtected authentication>
                    {" "}
                    <AllPosts />
                </AuthLayoutProtected>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayoutProtected authentication>
                    {" "}
                    <AddPost />
                </AuthLayoutProtected>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayoutProtected authentication>
                    {" "}
                    <EditPost />
                </AuthLayoutProtected>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)