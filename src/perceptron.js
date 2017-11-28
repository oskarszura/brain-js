import _ from 'lodash';
import * as mathjs from 'mathjs';

export default class Perceptron {
  constructor(config) {
    this.inputs = [];
    this.outputs = [];

    if (config) {
      this.inputs = _.map(new Array(config.inputs), () => ({
        weight: Perceptron.initWeight(),
      }));
    }
  }

  static initWeight() {
    return (2 * Math.random()) - 1;
  }

  static sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }

  static sigmoidDerivative(x) {
    return x * (1 - x);
  }

  addInput(perceptron) {
    this.inputs.push({
      weight: Perceptron.initWeight(),
      perceptron,
    });

    perceptron.outputs.push(this);
  }

  adjust(totalError, target, out, inputs) {
    console.log('------ adjust');
    const outputs = [];

    /*this.inputs = _.map(this.inputs, (input, index) => {
      const learningRate = 0.5;

      const doutdnet = out * (1 - out);
      const dnetdw = inputs[index];
      // const dedout =

      const derivative = 1;

      input.weight -= (learningRate * derivative);

      return input;
    });*/
  }

  think(inputs = []) {
    const netInputs = mathjs.multiply(inputs, _.map(this.inputs, 'weight'));
    return Perceptron.sigmoid(netInputs);
  }
}

