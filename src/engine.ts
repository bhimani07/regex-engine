/**
 * 
The Problem Statement
Our regex engine will support the following syntax:

Syntax	Meaning	Example	matches
a	Matches the specified character literal	q	q
*	Matches 0 or more of the previous character	a*	"", a, aa, aaa
?	Matches 0 or 1 of the previous character	a?	"", a
.	Matches any character literal	.	a, b, c, d, e ...
^	Matches the start of a string	^c	c, ca, caa, cbb ...
$	Matches the end of a string	a$	ba, baaa, qwerta ...
*/

function matchesOne(pattern: string, text: string): boolean {
  if (!pattern) return true;
  if (!text) return false;
  if (pattern === ".") return true; // wildcard

  return pattern === text;
}

function match(pattern: string, text: string): boolean {
  if (pattern === "") return true;
  else if (pattern === "$" && text === "") return true;
  else if (pattern[1] === "?") return matchQuestion(pattern, text);
  else if (pattern[1] === "*") return matchAsterik(pattern, text);
  else {
    return (
      matchesOne(pattern[0], text[0]) && match(pattern.slice(1), text.slice(1))
    );
  }
}

function matchQuestion(pattern: string, text: string): boolean {
  if (matchesOne(pattern[0], text[0]) && match(pattern.slice(2), text.slice(1)))
    // case where there is a match with the character prior to ? and checking for rest of the characters
    return true;
  else {
    return match(pattern.slice(2), text); // case where there is no match with the character prior to ?
  }
}

function matchAsterik(pattern: string, text: string): boolean {
  return (
    (matchesOne(pattern[0], text[0]) && match(pattern, text.slice(1))) ||
    match(pattern.slice(2), text)
  );
}

export default function engine(pattern: string, text: string): boolean {
  if (pattern[0] === "^") {
    return match(pattern.slice(1), text);
  } else {
    return match(".*" + pattern, text);
    // return text.split("").some((_, index) => match(pattern, text.slice(index)));
  }
}
