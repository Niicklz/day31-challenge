import React, { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { AiFillCaretDown, AiFillUnlock } from "react-icons/ai";
import { PasswordType } from "./PasswordType/PasswordType";

export const App = () => {
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState("");
  const [randomPassword, setRandomPassword] = useState("");
  const [length, setLength] = useState(4);

  const generateRandomPassword = (length = 10) => {
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);

      password += characters.charAt(randomIndex);
    }
    setRandomPassword(password);
  };

  useEffect(() => {
    handle();
  }, [lowercase, uppercase, symbol, number]);

  const handle = () => {
    const charactersSelected = [
      lowercase
        ? [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "p",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
          ]
        : "",
      uppercase
        ? [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
          ]
        : "",
      number ? ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] : "",
      symbol
        ? [
            "!",
            "#",
            "$",
            "%",
            "&",
            "'",
            "(",
            ")",
            "*",
            "+",
            ",",
            "-",
            ".",
            "/",
            ":",
            ";",
            "<",
            "=",
            ">",
            "?",
            "@",
            "[",
            "^",
            "_",
            "`",
            "{",
            "|",
            "}",
            "~",
          ]
        : "",
    ]
      .filter((character) => character !== "")
      .join(",");
    const charactersUnidos = charactersSelected.split(",");

    setCharacters(charactersUnidos.join(""));
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(randomPassword);
      alert("Password Copied!");
    } catch (error) {
      console.error(error);
    }
  };

  const selectChange = (e) => {
    setLength(e.target.value);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Password Generator</h1>
        <div className="password-generated">
          <p className="password">{randomPassword}</p>
          <button className="copy" onClick={copyToClipboard}>
            <FaRegCopy />
          </button>
        </div>
        <div className="password-length-container">
          <label htmlFor="options">Password Length</label>
          <AiFillCaretDown className="flechita" />
          <select id="options" onChange={selectChange}>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
          </select>
        </div>
        <PasswordType
          text="Include lowercase letter"
          id="lowercase"
          onChange={setLowercase}
        />
        <PasswordType
          text="Include uppercase letter"
          id="uppercase"
          onChange={setUppercase}
        />
        <PasswordType
          text="Include number letter"
          id="number"
          onChange={setNumber}
        />
        <PasswordType
          text="Include symbols letter"
          id="symbols"
          onChange={setSymbol}
        />
        <button
          className="generate-btn"
          onClick={() => generateRandomPassword(length)}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};
