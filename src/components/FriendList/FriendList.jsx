import PropTypes from 'prop-types';
import {
  FriendCardList,
  FriendCardItem,
  Status,
  ImgAvatar,
  Name,
} from './FriendList.styled';
import avatarDefault from './images/avatarDefault.png';

export const FriendList = ({ friends }) => {
  return (
    <FriendCardList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendCardItem key={id}>
          <FriendItem avatar={avatar} name={name} isOnline={isOnline} />
        </FriendCardItem>
      ))}
    </FriendCardList>
  );
};

function FriendItem({ avatar, name, isOnline }) {
  return (
    <>
      <Status>{isOnline ? '🟢' : '🔴'}</Status>
      <ImgAvatar src={avatar ?? avatarDefault} alt="User avatar" width="48" />
      <Name>{name}</Name>
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
