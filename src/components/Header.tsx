import React, { useState, useEffect } from "react";
import styled from "styled-components";
import music from "../music/tf2_more_gun.mp3";
import { ImPlay2 } from "react-icons/im";
import { ImPause } from "react-icons/im";

const Div = styled.div`
  text-align: center;
  background: #cf6a32;
  padding: 0.5rem;
`;

const H1 = styled.h1`
  color: white;
  font-family: "tf2 build";
  @media (max-width: 420px) {
    font-size: 28px;
  }
`;

const MusicSpan = styled.span`
  cursor: pointer;
  color: white;
  font-size: 2rem;
`;

export const Header = () => {
  const [audio] = useState(new Audio(music));
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  return (
    <Div>
      <H1>Tf2 Memory Cards</H1>
      <MusicSpan title="Play me!" onClick={toggleMusic}>
        {playing ? <ImPause /> : <ImPlay2 />}
      </MusicSpan>
    </Div>
  );
};
