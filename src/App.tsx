import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allSelectUsers, selectUsers } from './redux/store';
import { addUser, removeUser } from './redux/users';
import { AddUser, DropdownMenu, TeamUser, ToggleButton } from './components';
import { useClickOutside } from './hooks/useClickOutside';
import { IUser } from './types';
import people from './assets/images/groupOfPeople.svg';
import { GlobalStyle } from './styles/GlobalStyle';
import { StyledApp } from './styles/StyledApp';

export const App = () => {
  const [userName, setUserName] = useState('');
  const [newUserActive, setNewUserActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [needShowAll, setNeedShowAll] = useState(false);
  const users = useSelector(selectUsers);
  const allUsers = useSelector(allSelectUsers);
  const dispatch = useDispatch();

  const domNode = useClickOutside(() => {
    setNewUserActive(false);
    setShowDropdown(false);
  });

  const onAddUser = (user: IUser) => {
    dispatch(addUser(user));
    setShowDropdown(false);
    setNewUserActive(false);
    setUserName('');
  };

  const enterNewUser = () => {
    setNewUserActive(true);
    setShowDropdown(true);
  };

  const changeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onRemoveUser = (user: IUser) => {
    dispatch(removeUser(user));
  };

  const onFocusInput = () => {
    setShowDropdown(true);
  };

  const toggleDisplayUsers = () => {
    setNeedShowAll(!needShowAll);
  };

  const clearInput = () => {
    setUserName('');
  };

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <h1 className='title'>Test tasks for Testbirds👋</h1>
        <div className='team__wrapper'>
          <h3 className='team__wrapper-title'>Your team for this test</h3>
          <div className='team__wrapper-image'>
            Team page
            <img src={people} alt='' />
          </div>
        </div>
        <ul className='list__wrapper' ref={domNode}>
          <li>
            <AddUser
              userName={userName}
              changeUserName={changeUserName}
              onFocusInput={onFocusInput}
              newUserActive={newUserActive}
              enterNewUser={enterNewUser}
              clearInput={clearInput}
            />
            <DropdownMenu
              showDropdown={showDropdown}
              allUsers={allUsers}
              userName={userName}
              onAddUser={onAddUser}
            />
          </li>
          {users
            .map((user: IUser) => (
              <TeamUser key={user.id} user={user} onRemoveUser={onRemoveUser} />
            ))
            .splice(0, needShowAll ? users.length : 5)}
        </ul>
        <ToggleButton
          users={users}
          needShowAll={needShowAll}
          toggleDisplayUsers={toggleDisplayUsers}
        />
      </StyledApp>
    </>
  );
};
