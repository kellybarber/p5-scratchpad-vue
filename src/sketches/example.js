export const example = sketch => {

  console.log(window);

  const x = 100;
  const y = 100;

  sketch.setup = function() {
    const canvas = sketch.createCanvas(200, 200);
    canvas.parent('home');
  };

  sketch.draw = function() {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(x, y, 50, 50);
  };
}
