import React from "react";
import styled from "styled-components";

export default function Login() {
  const handleClick = async () => {
    const client_id = "9f19c078caba4c2bafe3e7bdcae63dd5";
    const redirect_url = "http://localhost:3000/";
    const api_url = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_url}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <img
        src="/images/LoopLink.png"
        alt="spotify"
      />
      <button onClick={handleClick}>Connect Loopmusic</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: black;
  gap: 5rem;
  img {
    height: 40vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: #b704d5;
    color: white;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
