function random_color() {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    return "this is a random color: " + color 
}

modual.export = random_color