import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 600px;
  box-shadow: 0px 2px 3px 0px rgb(0 0 0 / 75%);
  border-collapse: collapse;
  border-width: 1px;
  border-color: #ecf1f4;
  border-style: solid;
  color: #000000;

  th {
    text-transform: uppercase;
    background-color: #00bcd5;
    color: white;
    font-size: 12px;
    font-weight: 500;
    padding-top: 8px;
    padding-bottom: 8px;
    border: 1px solid #12568a5c;
  }

  tr {
    text-transform: capitalize;
    text-align: center;
    :hover {
      background-color: #d6fcfc;
    }
  }

  tbody {
  }

  td {
    border-width: 1px;
    border-color: #ecf1f4;
    border-style: solid;
    padding: 5px;
  }
`;

export const TableRow = styled.tr`
  background-color: ${props => {
    return props.index % 2 === 0 ? 'white' : '#ecf1f4';
  }};
`;
