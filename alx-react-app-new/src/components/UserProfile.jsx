const UserProfile = (props) => {
const h2Style = {
  color: 'blue',
  fontWeight: 'bold',
};

const ageStyle = {
  color: 'green',
  fontStyle: 'italic',
};

const bioStyle = {
  color: 'gray',
  fontStyle: 'italic',
};

  return (
    <div>
      <h2 style={h2Style}>{props.name}</h2>
      <p style={ageStyle}>Age: {props.age}</p>
      <p style={bioStyle}>Bio: {props.bio}</p>
     </div>
   );
 };

export default UserProfile;