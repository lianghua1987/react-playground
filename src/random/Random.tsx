import Clock from "../lifecycle-methods/Clock";
import React from "react";
import ZenQuote from "../lifecycle-methods/ZenQuote";
import ButtonList from "./ButtonList";
import State from "./State";
import GithubUsers from "../lifecycle-methods/GithubUsers";
import NumberList from "./parent-child/NumberList";

export function Random() {

  return (
    <div>
      <div className="Random">
        <Clock/>
        <ZenQuote/>
        <State/>
        <NumberList/>
        <GithubUsers/>
      </div>
      <ButtonList/>
    </div>
  );
}