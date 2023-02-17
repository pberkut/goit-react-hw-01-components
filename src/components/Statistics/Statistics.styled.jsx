import styled from 'styled-components';

export const Tittle = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  color: #666;
`;

export const StatisticsCard = styled.section`
  outline: 1px solid #666;
  width: 300px;
`;

export const StatListCard = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const StatItemCard = styled.li`
  text-align: center;
  outline: 1px solid #666;
  width: 100%;
  color: white;
  background-color: ${props => {
    switch (props.index) {
      case 0:
        return '#50c4f6';
      case 1:
        return '#a33cf6';
      case 2:
        return '#e64c66';
      case 3:
        return '#22b6cb';
      case 4:
        return '#099610';
      default:
        return 'black';
    }
  }};
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
  margin-top: 8px;
`;

export const Percentage = styled.span`
  display: block;
  margin-top: 4px;
  margin-bottom: 8px;
`;
