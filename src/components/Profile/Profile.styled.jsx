import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 300px;
  text-align: center;
  background-color: #f9fff4;
  border: 1px solid lightgray;
`;

export const ImgAvatar = styled.img`
  width: 150px;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  border-radius: 100px;
  box-shadow: 0 0 7px #666;
`;

export const Description = styled.div`
  color: #81909e;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 8px;
  color: black;
`;

export const Tag = styled.p`
  margin-top: 8px;
`;

export const Location = styled.p`
  margin-top: 8px;
  color: #81909e;
`;

export const Stats = styled.ul`
  display: flex;
  margin-top: 8px;
  justify-content: space-evenly;
  flex-direction: row;
  color: #4c4c4c;
`;

export const StatsItem = styled.li`
  width: 100%;
  background-color: #f3f6f9;
  border: 1px solid #bbbbbb;
`;

export const Label = styled.span`
  margin-top: 8px;
`;

export const Quantity = styled.span`
  margin-top: 4px;
  display: block;
  font-weight: 700;
  color: black;
`;
