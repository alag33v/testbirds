import styled from 'styled-components';

export const StyledDropdownMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow-y: auto;
  max-height: 250px;
  box-shadow: 0 0 5px #000;
  background: #fff;
  width: 300px;
  top: 80px;
  z-index: 1;
  cursor: default;

  ::-webkit-scrollbar {
    display: none;
  }

  .item {
    display: flex;
    align-items: center;
    width: 400px;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  .item:hover {
    background: rgba(144, 238, 144, 0.5);
  }

  .image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .name {
    font-size: 14px;
    margin-left: 15px;
  }

  .wrapper {
    display: flex;
  }

  .not-found {
    text-align: center;
    padding: 20px 0;
  }

  .not-found h3 {
    margin: 0;
    color: green;
  }

  .not-found p {
    margin: 10px 0 0;
  }
`;
