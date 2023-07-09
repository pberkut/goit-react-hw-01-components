import { GlobalStyle } from './styles/GlobalStyle';
import styles from './styles/styles.module.scss';

import users from '../data/user.json';
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

      <div className={styles.container}>
        <Profile users={users} />

        <Statistics title="Upload stats" stats={statistics} />

        <Statistics stats={statistics} />

        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
