import React, { Component } from "react";
import Card from "../Card/index";
import Characters from "../../images.json"
import NavBar from "../NavBar/index";
import "./style.css";


class Game extends Component{
    state={
        characters: Characters,
        selectedChar: [],
        message: "Click it to begin",
        topScore: 0,
        correct:"neutral"
    };
    handleClick = event =>{
        const currentChar = event.target.alt;
        const aleradyClicked = this.state.selectedChar.indexOf(currentChar) > 1;
        if (alreadyClicked)
    }
}