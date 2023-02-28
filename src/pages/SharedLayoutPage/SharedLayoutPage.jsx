import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import css from './SharedLayoutPage.module.css';

export const SharedLayoutPage = () => {
  return (
    <>
      <Header />
      <main className={css.StyledRoute}>
        <p>SharedLayoutPage</p>
          <Outlet/>
      </main>
    </>
  );
};
