import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import css from '../components/App.module.css';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Contacts from 'pages/Contacts/Contacts';
import Home from 'pages/Home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { featchCurrentUser } from 'redux/authOperatione';
import PrivatRoute from './PrivatRoute';
import PublicRoute from './PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchCurrentUser());
  }, []);
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PublicRoute restricted />}>
            <Route index element={<Home />} />
          </Route>
          <Route element={<PublicRoute restricted />}>
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<PublicRoute restricted />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivatRoute />}>
            <Route path="/contacts" element={<Contacts />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
