import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import YouTube from "react-youtube";

export default function Player() {
  const navigate = useNavigate();
  const location = useLocation();

  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    // 🛑 Prevent crash if no data is passed
    if (!location.state || !location.state.id) {
      console.log("No movie data found");
      return;
    }

    const movieId = location.state.id?.id || location.state.id;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=6d75b2a2e2b05ca51b4dda2ad6426fda&append_to_response=videos`
      )
      .then((response) => {
        const video = response.data.videos.results.find(
          (vid) =>
            vid.type === "Trailer" || vid.name === "Official Trailer"
        );

        if (video) {
          setTrailer(video.key);
        } else {
          console.log("Trailer not found");
        }
      })
      .catch((error) => {
        console.log("API Error:", error);
      });
  }, [location.state]);

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>

        {/* 🛑 If no trailer yet, show loading */}
        {!trailer ? (
          <h1 style={{ color: "white", textAlign: "center" }}>
            Loading Trailer...
          </h1>
        ) : (
          <YouTube
            videoId={trailer}
            className="video"
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
                controls: 1,
                rel: 0,
              },
            }}
          />
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    background-color: black;

    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;

      svg {
        font-size: 3rem;
        cursor: pointer;
        color: white;
      }
    }

    .video {
      height: 100%;
      width: 100%;
    }
  }
`;