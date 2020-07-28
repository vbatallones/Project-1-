# Project-1

## The Memory Game

## How the game works

* When the game starts, all tiles are turned face down.
* The player then flips over two cards, selecting them by clicking on them.
* If the two tiles have the same image, they remain face up. If not, they should be flipped face down again after a short delay.

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">

    <title>Memory Game</title>
</head>
<body>
    <h1 class="title">Trip Down To Memory Lane</h1>
    <div class="countdown">Time:</div>
    <div class="main-container" id="board">
        <div class="card-container"></div>
    </div>
    <script src="./script.js"></script>
</body>
</html>
```
Add my boilerplate, with my CSS link and Javascript.
My game will be timed which you can see in the `<div>` with a class of **countdown**. The board will be in the center of the screen as well the images. The images will be manipulated by the **DOM** and it will be all in my **JavaScript** file.