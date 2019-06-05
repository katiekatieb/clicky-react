import React from "react";
import "./header.css";

const Header = (props) => {
  return(
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Clicky Game</a>
        <div className="score ml-auto">
          Score: {props.score} | Highscore: {props.highscore} | Games Played: {props.gamesPlayed}
        </div>
      </nav>
    </header>
  )
}

export default Header;