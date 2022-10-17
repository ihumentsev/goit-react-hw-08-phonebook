import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import css from '../components/App.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { featchCurrentUser } from 'redux/authOperatione';
import PrivatRoute from './PrivatRoute';
import PublicRoute from './PublicRoute';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchCurrentUser());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <Suspense fallback={<h1>Загрузка...</h1>}>
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
      </Suspense>
    </div>
  );
};
