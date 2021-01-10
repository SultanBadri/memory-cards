import styled from "styled-components";

const ModalDiv = styled.div`
  position: absolute;
  padding: 2rem 5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
`;

export const Modal = ({ setScore, setIsClicked, setIsModalOpen }: any) => {
  const startOver = () => {
    setIsModalOpen(false);
    setScore(0);
    setIsClicked([]);
  };

  return (
    <ModalDiv>
      <h2>Game over :(</h2>
      <button onClick={() => startOver()}>Continue</button>
    </ModalDiv>
  );
};
