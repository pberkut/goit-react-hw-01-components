import PropTypes from 'prop-types';
import {
  ProfileCard,
  ImgAvatar,
  Description,
  Name,
  Tag,
  Location,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  return (
    <>
      <ProfileCard>
        <Description className="description">
          <ImgAvatar src={avatar} alt="User avatar" className="avatar" />
          <Name>{username}</Name>
          <Tag className="tag">{'@' + tag}</Tag>
          <Location>{location}</Location>
        </Description>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </ProfileCard>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
