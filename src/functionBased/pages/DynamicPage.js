import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const DynamicPage = ({ users }) => (
  <div>
    <h1>Dynamic Page</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={user.id}>{user.fullName}</Link>
        </li>
      ))}
    </ul>
    <Outlet />
  </div>
);

DynamicPage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.any),
};

DynamicPage.defaultProps = {
  users: [],
};

export default DynamicPage;
