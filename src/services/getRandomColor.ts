export function getRandomColor(): string {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

