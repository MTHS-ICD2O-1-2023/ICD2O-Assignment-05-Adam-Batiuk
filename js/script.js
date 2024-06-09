// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  // Define the amount of calculations
  const calculations = parseInt(document.getElementById("calculations").value)

  //Calculate pi
  let denominator = 1
  let numerator = 4
  let pi = numerator / denominator

  let loops = 0
  while (calculations >= loops) {
    denominator += 2
    numerator = 0 - numerator
    pi = pi + (numerator / denominator)
    loops ++
  }
  // print answer
  document.getElementById("answer").innerHTML = pi

}
