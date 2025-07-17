import { useContext } from 'react';
import UserContext from '../UserContext'; // adjust the path if needed

const UserProfile = () => {
  const userData = useContext(UserContext);

  const h2Style = {
    color: 'blue',
    fontWeight: 'bold',
  };

  const ageStyle = {
    color: 'green',
    fontStyle: 'italic',
    margin: '10px 0',
  };

  const bioStyle = {
    color: 'gray',
    fontStyle: 'italic',
    border: '1px solid #ccc',
    padding: '10px',
  };

  return (
    <div>
      <h2 style={h2Style}>{userData.name}</h2>
      <p style={ageStyle}>Age: <span>{userData.age}</span></p>
      <p style={bioStyle}>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserProfile;
