# Table of Contents
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Motivation](#motivation)
- [Prerequsite](#prerequsite)
  - [Python Setup](#python-setup)
  - [React Setup(Optional)](#react-setupoptional)
- [How to Run](#how-to-run)

# Introduction
This is a simple web calculator implemented on the idea as explained in LeetCode [Basic CalculatorIII](https://leetcode.com/problems/basic-calculator-iii/). The calculator will accept any expression containing non-negative integers and operators : ```+ * - / ( ) ``` and return calculate integer \
Note that `/` here means integer floor division so `9/2 = 4` and not `4.5`

# Motivation
The project is built to reinforce the learnings of backend developement while at the same time experiment with React to leverage it's Component based design ideaology to make the UI more intuitive and reusable

# Prerequsite

## Python Setup
Make sure you have python3 installed. In addition following libraries would be needed. You may install them via pip or pip3
```
pip install flask
pip install flask-cors
```
flask-cors allows your javascript to entertain cross-origin request. This is done to resolve problem which arises when javascript tries to access the locally hosted backend api via fetch API.

## React Setup(Optional)
I am currently using an already transpiled react-component card-board.js in html so you may not need to do this setup to run the project at least \
\
React uses JSX which is not support by browser natively. In order to able to use React we'll need node package manager to install the required libraries.  Make sure you have [Node.js](https://nodejs.org/) installed in your computer. Once you are done with the installation, in  the project root run the following
```
npm init -y
npm install babel-cli@6 babel-preset-react-app@3
```
Then to transpile any react script in react directory run
```
npx babel --watch react --out-dir static --presets react-app/prod 
```
For further info on this please refer [React Documentation](https://reactjs.org/docs/add-react-to-a-website.html)


# How to Run
In the project root director run
```
python3 flaskCalci.py
```



