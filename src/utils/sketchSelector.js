import * as sketches from '../sketches';

export default sketchName => {
  switch (sketchName) {
    case 'example' :
      return sketches.example;
    default :
      return () => 'Function';
  }
}
