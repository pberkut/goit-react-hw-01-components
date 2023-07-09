import { GlobalStyle } from './GlobalStyle';
import { Wrapper } from './Layout/Wrapper';

import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

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
        <Statistics title="Upload stats" stats={statistics} />
      </Wrapper>

      <Wrapper>
        <Statistics stats={statistics} />
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
