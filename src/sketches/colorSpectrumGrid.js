export const colorSpectrumGrid = (sketch) => {

  sketch.setup = function() {
    const canvas = sketch.createCanvas(800, 400);
    canvas.parent('color');
    sketch.noStroke();
    sketch.colorMode(sketch.HSB, sketch.width, sketch.height, 100);
  };

  sketch.draw = function() {
    const stepX = sketch.mouseX + 2;
    const stepY = sketch.mouseY + 2;

    for (let gridY = 0; gridY < sketch.height; gridY += stepY) {
      for (let gridX = 0; gridX < sketch.width; gridX += stepX) {
        sketch.fill(gridX, sketch.height - gridY, 100);
        sketch.rect(gridX, gridY, stepX, stepY);
      }
    }
  }
};
