import Container from 'components/Container/Container';
import css from '../Home/Home.module.css';
import img from '../../images/kak-uznat-kolvo-kontaktov-v-iphone-3.png';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className={css.section}>
        <Container>
          <div className={css.box}>
            <div className={css.wraper}>
              <h1> Contact BooK</h1>
              <Button className={css.btn} type="button" variant="contained">
                <NavLink to={'/login'} className={css.link}>
                  Log in
                </NavLink>
              </Button>
              <Button className={css.btn} type="button" variant="contained">
                <NavLink to={'/register'} className={css.link}>
                  {' '}
                  Sign in
                </NavLink>
              </Button>
            </div>
            <img src={img} alt="contact-book" className={css.image} />
          </div>
        </Container>
      </section>
    </>
  );
}
