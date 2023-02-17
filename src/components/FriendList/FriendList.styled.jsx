import styled from 'styled-components';

export const FriendCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FriendCardItem = styled.li`
  display: flex;
  gap: 8px;
  border: 1px solid;
  width: 200px;
  justify-content: flex-start;
  padding-top: 4px;
  padding-bottom: 4px;
  box-shadow: 2px 2px 2px 0px rgb(0 0 0 / 50%);
`;

export const Status = styled.span`
  display: flex;
  align-items: center;
`;

export const ImgAvatar = styled.img`
  border-radius: 5px;
`;

export const Name = styled.p`
  cursor: default;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
`;
