import { Form } from 'react-router-dom';
import { UserPlusIcon } from '@heroicons/react/24/solid';
import illustration from '../../assets/illustration.jpg';

const Intro = () => {
  return (
    <div className='intro'>
      <div>
        <h1>
          Take Control of <span className='accent'>Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <Form method='post'>
          <input
            type='text'
            name='userName'
            aria-label='Your name'
            autoComplete='given-name'
            required
            placeholder='What is your name?'
          />
          <input type='hidden' name='_action' value='newUser' />
          <button type='submit' className='btn btn--dark'>
            <span>create account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt='main illustration' width={600} />
    </div>
  );
};
export default Intro;
