const UserProfile = (props) => {
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
  border : '1px solid #ccc',
  padding: '10px',
};

const ageNumberStyle = {
  color: 'red',
  fontWeight: 'bold',
};

  return (
    <div>
      <h2 style={h2Style}>{props.name}</h2>
      <p style={ageStyle}>Age: <span style={ageNumberStyle}>{props.age}</span></p>
      <p style={bioStyle}>Bio: {props.bio}</p>
     </div>
   );
 };

export default UserProfile;