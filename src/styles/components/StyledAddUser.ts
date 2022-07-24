import styled from 'styled-components';

export const StyledAddUser = styled.div`
  width: 100%;
  position: relative;
  cursor: default;

  .user__wrapper {
    display: flex;
    align-items: center;
    transition: 0.3s ease-in-out;
    height: 90px;
    cursor: pointer;
  }

  .user__wrapper:hover {
    background-color: rgba(144, 238, 144, 0.5);
  }

  .user__wrapper:hover .user__icon {
    background: #fff;
  }

  .user__wrapper-title {
    font-size: 18px;
    max-width: 180px;
    color: green;
  }

  .user__icon {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    background: rgba(144, 238, 144, 0.5);
    border-radius: 50%;
    position: relative;
    margin: 0 10px;
    transition: 0.3s ease-in-out;
  }

  .user__icon img {
    width: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  .input__wrapper {
    max-width: 300px;
    position: relative;
  }

  .new-user__input {
    width: 100%;
    max-width: 300px;
    height: 45px;
    border: none;
    border-bottom: 2px solid green;
    padding: 0 40px 0 10px;
    outline: none;
  }

  .close {
    width: 20px;
    top: 50%;
    right: 10px;
    transform: translateY(-55%);
    position: absolute;
    cursor: pointer;
  }
`;
