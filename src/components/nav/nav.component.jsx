import { Form, NavLink } from 'react-router-dom';
import logo from '../../assets/logomark.svg';
import { TrashIcon } from '@heroicons/react/24/solid';

const Nav = ({ userName }) => {
  const submitHandler = (e) => {
    if (!confirm('Delete user and all data?')) {
      e.preventDefault();
    }
  };
  return (
    <nav>
      <NavLink to='/' aria-label='Go to home'>
        <img src={logo} alt='logomark' />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form method='post' action='/logout' onSubmit={submitHandler}>
          <button type='submit' className='btn btn--warning'>
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};
export default Nav;
