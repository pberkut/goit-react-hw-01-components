import { GlobalStyle } from './GlobalStyle';
import { Wrapper } from './Layout/Wrapper';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Wrapper>

      <Wrapper>
        <Statistics title="Upload stats" stats={data} />
      </Wrapper>

      <Wrapper>
        <Statistics stats={data} />
      </Wrapper>

      <Wrapper>
        <FriendList friends={friends} />
      </Wrapper>

      <Wrapper>
        <TransactionHistory items={transactions} />
      </Wrapper>
    </>
  );
};
