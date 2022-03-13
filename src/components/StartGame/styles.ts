import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 20px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  box-shadow: 0 4px 15px, 0 0 0 8px #ffffffeb;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  text-align: center;
`;

export const OptionsCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 15px;
  margin: 15px;
  border-radius: 10px;
  text-align: center;
  flex: 25%;
  cursor: ${({ isCompPlay, value }) =>
    isCompPlay || value ? "default" : "pointer"};
  opacity: ${({ isCompPlay, value }) => (isCompPlay || value ? "0.3" : "1")};
`;

export const Header = styled.h3`
  text-align: center;
`;

export const Text = styled.div`
  font-size: 15px;
  font-style: italic;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background: dodgerblue;
  color: white;
  border: 0;
  text-align: center;
  padding: 17px;
  font-weight: bold;
  display: block;
  margin: auto;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
