import { Outlet, useLoaderData } from 'react-router-dom';
import wave from '../assets/wave.svg';
import Nav from '../components/nav/nav.component';
import { fetchData } from '../utils/helpers';

export const mainLoader = () => {
  const userName = fetchData('userName');
  return { userName };
};

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className='layout'>
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt='wave' />
    </div>
  );
};
export default Main;
