import { useParams, Link } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();

  return (
    <>
      <h2>
        User:
        {userId}
      </h2>
      <Link to="/abouts">Back to Users</Link>
    </>
  );
};

export default User;
