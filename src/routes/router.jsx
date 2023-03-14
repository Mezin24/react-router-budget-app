import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Error from './error/error.page';
import Dashboard, { dasboardLoader } from './dashboard/dasboard.page';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<Error />}>
      <Route index element={<Dashboard />} loader={dasboardLoader} />
      {/* <Route path='/about' element={<h1>About page</h1>} /> */}
    </Route>
  )
);

export default router;
