import PropTypes from 'prop-types';
import {
  ProfileCard,
  ImgAvatar,
  Description,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Quantity,
  Label,
} from './Profile.styled';

export const Profile = ({ user }) => {
  const {
    username,
    tag,
    location,
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats,
  } = user;

  return (
    <>
      <ProfileCard>
        <Description>
          <ImgAvatar src={avatar} alt="User avatar" />
          <Name>{username}</Name>
          <Tag>{'@' + tag}</Tag>
          <Location>{location}</Location>
        </Description>

        <Stats>
          <StatsItem>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </StatsItem>
        </Stats>
      </ProfileCard>
    </>
  );
};

Profile.propTypes = {
  users: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }),
};
