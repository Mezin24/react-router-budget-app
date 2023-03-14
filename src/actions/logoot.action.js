import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeData } from '../utils/helpers';

export const logoutAction = () => {
  removeData({
    key: 'userName',
  });
  toast.success("You've deleted you account!");
  return redirect('/');
};
