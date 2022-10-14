import Container from 'components/Container/Container';
import css from '../Home/Home.module.css';
export default function Home() {
  return (
    <>
      <section className={css.section}>
        <Container>
          <div>Hello! Plise add your contact</div>;
        </Container>
      </section>
    </>
  );
}
