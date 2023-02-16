import PropTypes from 'prop-types';
import avatarDefault from './images/avatarDefault.png';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className="item" key={id}>
          <FriendItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

function FriendItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className="status">{isOnline ? 'Online' : 'Offline'}</span>
      <img
        className="avatar"
        src={avatar ?? avatarDefault}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
