import styled from 'styled-components';

export const StyledTeamUser = styled.li`
  position: relative;

  :hover {
    background: bisque;
  }

  :hover .img {
    background: #fff;
  }

  .remove__user {
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    left: 10px;
    opacity: 1;
    transition: 0.3s ease-in-out;
  }

  .remove__user-text {
    font-size: 12px;
    text-align: center;
    display: block;
    background: #fff;
    padding: 5px 10px;
    white-space: nowrap;
    top: -40px;
    left: -22px;
    position: absolute;
    border-radius: 5px;
    color: #000;
    opacity: 0;
    transition: 0.3s ease-in-out;
    box-shadow: 0 0 3px #000;
  }

  .remove__user-text::after {
    content: '';
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
    border: 10px solid transparent;
    border-top: 10px solid #fff;
    position: absolute;
    transition: 0.3s ease-in-out;
  }

  .remove__user:hover .remove__user-text {
    opacity: 1;
  }

  .close {
    width: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  :hover .remove__user {
    opacity: 1;
  }

  display: flex;
  align-items: center;
  height: 90px;

  .img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 10px;
  }

  .user__wrapper {
    display: flex;
    flex-direction: column;
  }

  .user__role {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .user__name {
    font-size: 18px;
    margin: 0;
  }
`;
