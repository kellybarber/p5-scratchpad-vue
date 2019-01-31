export const helloColor = (sketch) => {

  sketch.setup = function() {
    const canvas = sketch.createCanvas(720, 720);
    canvas.parent('color');
    sketch.noCursor();

    sketch.colorMode(sketch.HSB, 360, 100, 100);
    sketch.rectMode(sketch.CENTER);
    sketch.noStroke();
  };

  sketch.draw = function() {
    sketch.background(sketch.mouseY / 2, 100, 100);

    sketch.fill(360 - sketch.mouseY / 2, 100, 100);
    sketch.rect(360, 360, sketch.mouseX + 1, sketch.mouseX + 1);
  }
};
