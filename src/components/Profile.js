import "./style.css"

const Profile = (props) => {
    return (
        <div style={props.style} className="profile">
          <p>
          Name: {props.profile.name}
          </p>
          <p>
          Age: {props.profile.age}
          </p>
        </div>
    );
}

export default Profile