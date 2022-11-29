import "./Favorites.css";
import { useInView } from "react-intersection-observer";
import FavSong from "../../assets/images/FavSong.jpg";
import FavAlbum from "../../assets/images/FavAlbum.jpg";
import FavTvShow from "../../assets/images/FavTvShow.jpg";
import FavGame from "../../assets/images/FavGame.png";
import ScubbyDoo from "../../assets/images/ScubbyDoo.jpg";
import SpotifyL from "../../assets/images/SpotifyL.png";
import InstaL from "../../assets/images/InstaL.png";
import DiscordL from "../../assets/images/DiscordL.png";
import GithubL from "../../assets/images/GithubL.png";

const Favorites = () => {
  const { ref: t1Ref, inView: t1InView } = useInView();
  const { ref: t2Ref, inView: t2InView } = useInView();
  const { ref: t3Ref, inView: t3InView } = useInView();
  const { ref: t4Ref, inView: t4InView } = useInView();
  const { ref: t5Ref, inView: t5InView } = useInView();
  const { ref: songRef, inView: songInView } = useInView();
  const { ref: albumRef, inView: albumInView } = useInView();
  const { ref: showRef, inView: showInView } = useInView();
  const { ref: gameRef, inView: gameInView } = useInView();
  const { ref: artRef, inView: artInView } = useInView();
  const { ref: dissRef, inView: dissInView } = useInView();
  const { ref: linksRef, inView: linksInView } = useInView();

  return (
    <div className="favorites-section">
      <h1
        ref={t1Ref}
        className={`${t1InView ? "SlideRight" : ""} RightValue titleForFav`}
      >
        My Favorite Song
      </h1>
      <div
        ref={songRef}
        className={`${songInView ? "SlideRight" : ""} RightValue favCard`}
      >
        <div className="favSubCard">
          <img
            style={{ boxShadow: "0 0 35px black" }}
            src={FavSong}
            alt="My Favorite Song"
          />
          <span>
            <a
              href="https://open.spotify.com/track/5Gw8owErJLfkNxWCSwPQKJ?si=93beb928bd0340e1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={SpotifyL} alt="Spotify Song" />
            </a>
          </span>
        </div>
      </div>

      <h1
        ref={t2Ref}
        className={`${t2InView ? "SlideLeft" : ""} LeftValue titleForFav`}
      >
        My Favorite Album
      </h1>
      <div
        ref={albumRef}
        className={`${albumInView ? "SlideLeft" : ""} LeftValue favCard`}
      >
        <div className="favSubCard">
          <span>
            <a
              href="https://open.spotify.com/album/5Nrd1huLFrRbhBlD43UJiQ?si=kF5czJQPTa-EIFehoOQxTg"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img src={SpotifyL} alt="Spotify Album" />
            </a>
          </span>
          <img
            style={{ boxShadow: "0 0 35px black" }}
            src={FavAlbum}
            alt="My Favorite Album"
          />
        </div>
      </div>

      <h1
        ref={t3Ref}
        className={`${t3InView ? "SlideUp" : ""} UpValue titleForFav`}
      >
        My Favorite Tv Show
      </h1>
      <div
        ref={showRef}
        className={`${showInView ? "SlideUp" : ""} UpValue favCard`}
      >
        <img
          style={{ borderRadius: "5%", boxShadow: "0 0 35px black" }}
          src={FavTvShow}
          alt="My Favorite Tv Show"
        />
      </div>

      <h1
        ref={t4Ref}
        className={`${t4InView ? "SlideDown" : ""} DownValue titleForFav`}
      >
        My Favorite Game
      </h1>
      <div>
        <div className="favSubCard">
          <img
            ref={gameRef}
            className={`${gameInView ? "SlideDown" : ""} DownValue favCard`}
            style={{
              borderRadius: "10%",
              width: "800px",
              height: "500px",
              boxShadow: "0 0 35px black",
            }}
            src={FavGame}
            alt="My Favorite Game"
          />
          <div
            ref={dissRef}
            className={`${dissInView ? "PopIn" : ""} PopValue dissPart`}
          >
            <span>😭</span>
            <p>
              I bet your bathroom floor smells like piss with the aim you have.
            </p>
            <span>💀</span>
          </div>
          <p className="dissInfo">
            The soul crushing insult that stuck with me ever since.
          </p>
        </div>
      </div>

      <h1
        ref={t5Ref}
        className={`${t5InView ? "PopIn" : ""} PopValue titleForFav`}
      >
        My Favorite Art Piece
      </h1>
      <div
        ref={artRef}
        className={`${artInView ? "PopIn" : ""} PopValue favCard`}
      >
        <img
          src={ScubbyDoo}
          style={{
            width: "800px",
            height: "600px",
            borderRadius: "5%",
            boxShadow: "0 0 35px black",
          }}
          alt="My Favorite Art Piece"
        />
      </div>

      <div
        ref={linksRef}
        className={`${linksInView ? "SlideUp" : ""} UpValue linkPaths`}
      >
        <a
          href="https://open.spotify.com/user/6niagvofdti7y6jogauryvwnu?si=8ace38858e754d7b"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={SpotifyL} alt="My Spotify Account" />
        </a>

        <a
          href="https://www.instagram.com/hristijan_pavlovski/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={InstaL} alt="My Instagram Account" />
        </a>

        <img className="discordImg" src={DiscordL} alt="My Discord Account" />
        <small className="discordName">Hristijan#0455</small>

        <a
          href="https://github.com/Hristijan14"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={GithubL} alt="My Github Account" />
        </a>
      </div>
    </div>
  );
};

export default Favorites;
