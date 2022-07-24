import { IUser } from '../types';
import { StyledToggleButton } from '../styles/components/StyledToggleButton';

interface IToggleButton {
  users: IUser[];
  needShowAll: boolean;
  toggleDisplayUsers: () => void;
}

const ToggleButton = ({
  users,
  needShowAll,
  toggleDisplayUsers
}: IToggleButton) => {
  return (
    <StyledToggleButton>
      {users.length > 5 && !needShowAll && (
        <button className='btn' onClick={toggleDisplayUsers}>
          Show all
        </button>
      )}
      {users.length > 5 && needShowAll && (
        <button className='btn' onClick={toggleDisplayUsers}>
          Show less
        </button>
      )}
    </StyledToggleButton>
  );
};

export default ToggleButton;
