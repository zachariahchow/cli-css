# cli-css

![](https://media.giphy.com/media/5uHVQE9VfUFNK/source.gif)

Convert colors using the command line.


Create a function that converts from hex colors to rgb colors.

[https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb](https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb)

Write a nodejs command line program that takes a hex color as an argument and returns the rbg CSS value.
```bash
$ node index.js hex \#ffffff
```

Will print out:
```bash
rgb( 255, 255, 255 )
```

### Getting started

Create an `index.js` file. Run it with `node index.js`.

### Further
Create the functionality to put in 3 number values and get out the hex color.

Change the program to take the kind of conversion you want to do.

```bash
node index.js rgb 255 255 255
```

Will print out:
```bash
#ffffff
```

### Further
Separate your conversion functions out into separate module file(s).

### Further
Add HSL colors.

If the user puts in a hex color, print out the rgb and hsl values.

If the user puts in a rgb value, print out the hsl an d hex values.

### Further
Color the output using bash colors: (note this doesn't work on all terminals!)

```js

// set as red
var r = 255;
var b = 0;
var g = 0;

// this special console will create colored output
console.log(`\x1b[38;2;${r};${g};${b}m%s\x1b[0m`, myOutput);
```

### Further
Using some UNIX CLI syntax to be able to take in a number of colors and print out a conversion for each input.

This example gives the result of `cat` to your program.

```bash

node index.js hex $(cat colors.txt)
```

### Further
Give your program the ability to calculate more information about colors.

Output other color harmonies given an input: https://dev.to/benjaminadk/make-color-math-great-again--45of
