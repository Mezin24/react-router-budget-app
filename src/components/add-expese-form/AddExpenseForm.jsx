import { useRef, useEffect } from 'react';
import { Form, useFetcher } from 'react-router-dom';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const formRef = useRef();
  const newExpenseRef = useRef();

  const isSubmitting = fetcher.state === 'submitting';

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      newExpenseRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className='form-wrapper'>
      <h2 className='h3'>
        Add New{' '}
        <span className='accent'>
          {budgets.length === 1 && `${budgets.map((item) => item.name)} `}
        </span>
        Expense
      </h2>
      <fetcher.Form ref={formRef} method='post' className='grid-sm'>
        <div className='expense-inputs'>
          <div className='grid-xs'>
            <label htmlFor='newExpenseName'>Expense Name</label>
            <input
              type='text'
              name='newExpenseName'
              id='newExpenseName'
              required
              placeholder='e.g., Coffee'
              aria-label='New expense name'
              ref={newExpenseRef}
            />
          </div>
          <div className='grid-xs'>
            <label htmlFor='newExpenseAmount'>Expense Name</label>
            <input
              type='text'
              name='newExpenseAmount'
              id='newExpenseAmount'
              required
              placeholder='e.g., 360'
              aria-label='New expense amount'
              step='0.01'
              inputMode='decimal'
            />
          </div>
          <div className='grid-xs' hidden={budgets.length === 1}>
            <label htmlFor='newExpenseBudget'>Budget Category</label>
            <select name='newExpenseBudget' id='newExpenseBudget'>
              {budgets
                .sort((a, b) => a.createdAt - b.createdAt)
                .map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <input type='hidden' name='_action' value='createExpense' />
        </div>
        <button className='btn btn--dark' disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Add Budget...</span>
          ) : (
            <>
              <span>Create budget</span>
              <PlusCircleIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};
export default AddExpenseForm;
