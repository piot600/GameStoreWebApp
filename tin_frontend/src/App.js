import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Orders from "./pages/Orders"
import Games from "./pages/Games";
import AddUserForm from "./components/UserComponent/AddUserFrom";
import UpdateUserForm from "./components/UserComponent/UpdateUserForm";
import AddGameForm from "./components/GameComponent/AddGameForm";
import UpdateGameForm from "./components/GameComponent/UpdateGameForm";
import UserDetails from "./components/UserComponent/UserDetails";
import GameDetails from "./components/GameComponent/GameDetails";
import OrderDetails from "./components/OrderComponent/OrderDetails";
import UpdateOrderForm from "./components/OrderComponent/UpdateOrderForm";
import AddOrderForm from "./components/OrderComponent/AddOrderForm";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="users" element={<Users />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="games" element={<Games />} />
                    <Route path="users/add" element={<AddUserForm />} />
                    <Route path="users/update/:id" element={<UpdateUserForm />} />
                    <Route path="users/details/:id" element={<UserDetails />} />
                    <Route path="games/add" element={<AddGameForm />} />
                    <Route path="games/update/:id" element={<UpdateGameForm />} />
                    <Route path="games/details/:id" element={<GameDetails />} />
                    <Route path="orders/add" element={<AddOrderForm />} />
                    <Route path="orders/details/:id" element={<OrderDetails />} />
                    <Route path="orders/update/:id" element={<UpdateOrderForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
