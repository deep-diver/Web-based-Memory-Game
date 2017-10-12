# Memory Game Project

## Table of Contents

* Overview
* Functions
* Dependencies
* Resources

## Overview
![Program Capture](/capture.png)

* This project is a part of Udacity's FEWD(Front End Web Developer) Nanodegree pgrogram's assignment. The purpose of this project is to enhance writing javascript code ability such as building entire program logic, pseudoclass creation, manipulating DOM with jQuery, getting familiar with javascript syntax/object/function, and so on.

* This project is "Memory Game". When a card is clicked, it shows what symbol's in it. Users should select two cards by guessing their location. Memory Game can be completed when finding all pairs of the same symbols. 

## Functions
* Shuffling Cards
  * when restart button is clicked, all cards are shuffled. 
* Counting
  * record how many moves users has made
  * after 10 moves, one star will be lost
  * after 20 moves, another star will be lost (the worst score range)
  * record how many seconds users has played
* After finished..
  * a modal dialogue pops up to ask if users want to play again
  * the modal gives score information 

## Dependencies
* jQuery is used to manipulate UI/DOM
  * http://jquery.com
* fontawesome is used to draw card images 
  * each card image is softly imbeded with html class property
  * http://fontawesome.io
* font family is from google's font repo
  * Coda font style is used in this project
  * https://fonts.google.com/specimen/Coda

## Resources
* index.html
  * main game page structure including modal dialogue
* /css/app.css
  * CSS stylesheet for index.html
* /js/app.js
  * Javascript to make index.html (game) being interactive
* /img/geometry2.png
  * simple background image