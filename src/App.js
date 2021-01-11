//Files Imported
import React, { useState } from "react";
import { emojiDB } from "./EmojiDB";
import "./styles.css";

//Converting Object into Array of Keys
var emojiArray = Object.keys(emojiDB);

//Main Function Component
export default function App() {
  //Using State
  const [emojiMeaning, setEmojiMeaning] = useState("");

  //Declaring clickEventHandler Function
  function clickEventHandler(emoji) {
    /*Getting the value from our database object and 
    setting the state and passing the value as state variable*/
    setEmojiMeaning(emojiDB[emoji]);
  }

  //Declaring inputChangeEventHandler Function for getting value as an user input
  function inputChangeEventHandler(event) {
    //Getting value of user input using event.target
    let userInput = event.target.value;

    //Storing value in our state variable after passing user input to our database object
    let emojiMeaning = emojiDB[userInput];

    //Checking Condition if the emoji is not present then throw an error
    if (emojiMeaning in emojiDB) {
      setEmojiMeaning(emojiMeaning);
    } else if (userInput.length === 0) {
      setEmojiMeaning("");
    } else {
      //Setting State Function to re-render the state
      setEmojiMeaning("We don't have that emoji yet! Sorry:(");
    }
  }

  return (
    <div className="emojiCard">
      <header>
        <h1 className="header">
          Welcome to <br />
          Animals Emoji Interpreter
        </h1>
      </header>
      <section>
        <form className="form">
          <label>Search Animals Emoji</label>
          <input
            onChange={inputChangeEventHandler}
            type="text"
            className="emojiField"
          ></input>
        </form>
        <div className="messageWrapper">
          <h1 className="message">{emojiMeaning}</h1>
        </div>
        <div className="emojiList">
          <h1 className="divHeader">
            Frequently Used Emojis <span>(Click to get the meaning)</span>
          </h1>

          <ul className="emojiCollection">
            {emojiArray.map((emoji, index) => {
              return (
                <li
                  className="emoji"
                  key={index}
                  onClick={() => clickEventHandler(emoji)}
                >
                  {emoji}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
