import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import RestrictedRoute from "./Components/RestrictedRoute/RestrictedRoute";
import UserContextProvider from "./Context/AuthContext";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Chat from "./Components/Chat/Chat";
function App() {
  const router = createBrowserRouter([{
    path:'' , element: <Layout/> , children:[
      {index: true, element: <ProtectedRoute><Home/></ProtectedRoute>},
      { path: '/login',element: <RestrictedRoute><Login/></RestrictedRoute>},
      { path: '/register', element: <RestrictedRoute><Register/></RestrictedRoute> },
      {path: '/chat', element:<Chat/>}
    ]
  }]);
  return <>
    <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>
  </>
}

export default App
