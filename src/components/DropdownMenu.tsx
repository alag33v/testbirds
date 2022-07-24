import { IUser } from '../types';
import avatar from '../assets/images/avatar-default.png';
import { StyledDropdownMenu } from '../styles/components/StyledDropdownMenu';

interface IDropdownMenu {
  showDropdown: boolean;
  allUsers: IUser[];
  userName: string;
  onAddUser: (user: IUser) => void;
}

const DropdownMenu = ({
  showDropdown,
  allUsers,
  userName,
  onAddUser
}: IDropdownMenu) => {
  const filteredUsers = allUsers.filter((user: IUser) => {
    if (userName === '') return user;
    return user.username.toLocaleLowerCase().includes(userName.toLowerCase());
  });

  return (
    <StyledDropdownMenu>
      {showDropdown &&
        filteredUsers.map((user: IUser) => {
          return (
            <li className='item' key={user.id} onClick={() => onAddUser(user)}>
              <img className='image' src={avatar} alt='' />
              <span className='name'>{user.username}</span>
            </li>
          );
        })}
      {showDropdown && !filteredUsers.length && (
        <div className='not-found'>
          <h3>Team member not found.</h3>
          <p>Maybe she/he is not in your team?</p>
        </div>
      )}
    </StyledDropdownMenu>
  );
};

export default DropdownMenu;
