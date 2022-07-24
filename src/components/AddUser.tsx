import React from 'react';
import plus from '../assets/images/plus.svg';
import close from '../assets/images/close.svg';
import { StyledAddUser } from '../styles/components/StyledAddUser';

interface IAddUser {
  userName: string;
  changeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusInput: () => void;
  newUserActive: boolean;
  enterNewUser: () => void;
  clearInput: () => void;
}

const AddUser = ({
  userName,
  changeUserName,
  onFocusInput,
  newUserActive,
  enterNewUser,
  clearInput,
}: IAddUser) => {
  return (
    <StyledAddUser>
      {newUserActive ? (
        <div className='input__wrapper'>
          <input
            className='new-user__input'
            type='text'
            value={userName}
            onChange={e => changeUserName(e)}
            onFocus={() => onFocusInput()}
            placeholder='enter new user'
            autoFocus
          />
          <img className='close' onClick={clearInput} src={close} alt='' />
        </div>
      ) : (
        <div className='user__wrapper' onClick={enterNewUser}>
          <div className='user__icon'>
            <img src={plus} alt='' />
          </div>
          <h4 className='user__wrapper-title'>Add team member to this test</h4>
        </div>
      )}
    </StyledAddUser>
  );
};

export default AddUser;
