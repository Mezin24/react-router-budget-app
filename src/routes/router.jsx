import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Error from './error/error.page';
import Dashboard, {
  dashboardLoader,
  dashboardAction,
} from './dashboard/dasboard.page';
import Main, { mainLoader } from '../layout/main.layout';
import { logoutAction } from '../actions/logoot.action';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Main />}
      loader={mainLoader}
      // errorElement={<Error />}
    >
      <Route
        index
        element={<Dashboard />}
        loader={dashboardLoader}
        action={dashboardAction}
        errorElement={<Error />}
      />
      <Route path='logout' action={logoutAction} />
      <Route path='*' element={<Error />} />
    </Route>
  )
);

export default router;
