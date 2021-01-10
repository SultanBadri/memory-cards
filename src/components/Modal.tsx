import styled from "styled-components";
import { RiEmotionSadLine } from "react-icons/ri";

const ModalDiv = styled.div`
  position: absolute;
  padding: 2rem 6rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  text-align: center;
  font-family: "arial";
  background: #3e4242;
  color: white;
  @media (max-width: 420px) {
    padding: 2rem 3rem;
  }
  @media (max-width: 360px) {
    padding: 1rem 2rem;
  }
`;

const H1 = styled.h1`
  white-space: nowrap;
`;

const Paragraph = styled.p`
  padding: 1rem;
  font-size: 1.2rem;
  white-space: nowrap;
`;

const Button = styled.div`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 8px;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.3s ease;
  background: gray;
  font-family: "tf2 build";
  &:hover {
    background: #cf6a32;
    color: white;
  }
`;

interface ModalProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setIsClicked: React.Dispatch<any>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<ModalProps> = ({
  score,
  setScore,
  setIsClicked,
  setIsModalOpen,
}) => {
  const startOver = () => {
    setIsModalOpen(false);
    setScore(0);
    setIsClicked([]);
  };

  return (
    <ModalDiv>
      <H1>
        Game over! <RiEmotionSadLine style={{ verticalAlign: "middle" }} />
      </H1>
      <Paragraph>You scored {score} points!</Paragraph>
      <Button onClick={() => startOver()}>New Game</Button>
    </ModalDiv>
  );
};
