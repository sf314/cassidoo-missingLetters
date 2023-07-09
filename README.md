# Missing Letters

From cassidoo's [2023-06-25 newsletter](https://buttondown.email/cassidoo/archive/change-is-a-stranger-you-have-yet-to-know-george/)

## Overview

From the newsletter:

> Write a function that takes an array of consecutive, increasing letters as input, and returns any missing letters in the array between the first and last letter. 

Example:

```
> missingLetters(['a','b','c','d','f'])
> ['e']

> missingLetters(['a','b','c','d','e','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'])
> ['f','g','v']
```

## Concept of Operations

By using their ASCII codes, we can create a marker that starts at the first
letter of the input:

```js
let marker = input[0].charCodeAt(0);
```

We can then loop thru each letter of the input array, find that letter's ASCII
value, then print (or save) each ASCII code between it and the marker.

```js
while (marker < ascii - 1) {
    marker++;
    missing.push(String.fromCharCode(marker))
}
```

There are probably more elegant ways of doing this, but the above is the
operation that happens in my brain.

For example, if the marker is at `97` ('a'), and the next letter is `100` ('c'),
then this will push `98` and `99` to the output.

After this inner loop completes, we can save marker to the current letter

```js
marker = ascii
```

Assumptions:
- The input is an array strings
- Each string is a single lowercase ASCII letter a-z, and thus bounded from 
  ASCII value 97 thru 122
- Each successive letter is greater than the last
