import styled from 'styled-components';

export const StyledApp = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 25px;

  .main__wrapper {
    border: 1px solid lightgray;
    border-top: 3px solid green;
    padding: 5px 15px;
  }

  .list__wrapper {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;

    @media (max-width: 550px) {
      flex-direction: column;
    }
  }

  .list__wrapper > li {
    display: flex;
    align-items: center;
    width: 50%;
    height: 90px;
    cursor: pointer;

    @media (max-width: 550px) {
      width: 100%;
    }
  }

  .title {
    font-size: 34px;
    text-align: center;
    margin-bottom: 40px;

    @media (max-width: 550px) {
      font-size: 24px;
    }

    @media (max-width: 350px) {
      font-size: 20px;
    }
  }

  .team__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .team__wrapper-title {
    font-size: 20px;
    text-transform: uppercase;
    color: rgb(115, 115, 115);
    margin-left: 10px;

    @media (max-width: 550px) {
      font-size: 14px;
    }
  }

  .team__wrapper-image {
    text-transform: uppercase;
    margin-right: 40px;
    color: rgb(115, 115, 115);

    @media (max-width: 550px) {
      font-size: 12px;
    }

    @media (max-width: 350px) {
      font-size: 0;
    }
  }

  .team__wrapper-image img {
    width: 20px;
    height: 20px;
    right: 10px;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }
`;
