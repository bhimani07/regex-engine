# regex-engine

## Table of Contents

- [About](#about)
- [Install](#install)
- [Usage](#usage)

## About <a name = "about"></a>

Simple regex engine inspired from the <a href = "https://nickdrane.com/build-your-own-regex/">blog</a>

This regex engine supports the following syntax:

| Syntax | Meaning                                     | Example | matches              |
| ------ | ------------------------------------------- | ------- | -------------------- |
| a      | Matches the specified character literal     | q       | q                    |
| \*     | Matches 0 or more of the previous character | a\*     | "", a, aa, aaa       |
| ?      | Matches 0 or 1 of the previous character    | a?      | "", a                |
| .      | Matches any character literal               | .       | a, b, c, d, e ...    |
| ^      | Matches the start of a string               | ^c      | c, ca, caa, cbb ...  |
| $      | Matches the end of a string                 | a$      | ba, baaa, qwerta ... |

## Install <a name = "install"></a>

Install dependencies and generate a build

```
npm install
npm run build
```

## Usage <a name = "usage"></a>

Run the app using command line args as follows

```
npm start <pattern> <text>
```
