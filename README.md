# Table of Contents
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Motivation](#motivation)
- [Prerequiste](#prerequiste)
  - [Python Setup](#python-setup)
- [How to Run](#how-to-run)

# Introduction
This is a simple web calculator implemented on the idea as explained in LeetCode [Basic CalculatorIII](https://leetcode.com/problems/basic-calculator-iii/). The calculator will accept any expression containing non-negative integers and operators : ```+ * - / ( ) ``` and return calculate integer \
Note that `/` here means integer floor division so `9/2 = 4` and not `4.5`

# Motivation
The project is built to reinforce the learnings of backend developement while at the same time leverage the use of React Component based design to make the UI more intuitive. Currently work to include React is in progress

# Prerequiste

## Python Setup
Make sure you have python3 installed. In addition following libraries would be needed. You may install them via pip or pip3
```
pip install flask
pip install flask-cors
```
flask-cors allows your javascript to entertain cross-origin request. This is done to resolve problem which arises when javascript tries to access the locally hosted backend api via fetch API.

# How to Run
In the project root director run
```
python3 flaskCalci.py
```



