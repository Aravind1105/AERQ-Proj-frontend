import styled from "styled-components";

export const Modal = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;

export const ModalDialog = styled.div`
  background: #fefefe;
  border: #333333 solid 0px;
  border-radius: 5px;
  text-align: center;
  z-index: 11;
  width: 450px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 480px) {
    width: 270px;
  }
`;

export const ModalBody = styled.div`
  padding: 20px;
`;

export const ModalHeader = styled.div`
  padding: 10px 20px;
  border-bottom: #eeeeee solid 1px;
  font-size: 20px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-style: italic;
  padding: 5px;
`;

export const Button = styled.button`
  background: dodgerblue;
  color: white;
  border: 0;
  text-align: center;
  margin-bottom: 20px;
  padding: 17px;
  margin: 10px;
  width: 150px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

export const MainText = styled.div`
  margin: 10px;
`;

export const Description = styled.div`
  margin: 10px;
  font-size: 15px;
`;
