import { IUser } from '../types';
import avatar from '../assets/images/avatar-default.png';
import close from '../assets/images/close.svg';
import { StyledTeamUser } from '../styles/components/StyledTeamUser';

interface ITeamUser {
  user: IUser;
  onRemoveUser: (user: IUser) => void;
}

const TeamUser = ({ user, onRemoveUser }: ITeamUser) => {
  return (
    <StyledTeamUser onClick={() => onRemoveUser(user)}>
      <img className='img' src={avatar} alt='' />
      <div className='remove__user'>
        <span className='remove__user-text'>Remove user</span>
        <img className='close' src={close} alt='' />
      </div>
      <div className='user__wrapper'>
        <span className='user__role'>{user.role}</span>
        <h4 className='user__name'>{user.username}</h4>
      </div>
    </StyledTeamUser>
  );
};

export default TeamUser;
