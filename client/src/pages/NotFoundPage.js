import React from 'react';

const NotFoundPage = () => (
  <div>
    <h2>404 Not Found</h2>
    <p>Sorry, it looks like the company in question has not been added yet or does not exist.</p>
    <a className='btn btn-primary' href='/companies'>Take me back!</a>
  </div>
)
export default NotFoundPage;