import Perceptron from './perceptron';

const P11 = new Perceptron({
  inputs: 2,
});
const P12 = new Perceptron({
  inputs: 2,
});

const P21 = new Perceptron();

P21.addInput(P11);
P21.addInput(P12);

export default (target, ...x) => {
  const outP11 = P11.think([...x]);
  const outP12 = P12.think([...x]);
  const outP21 = P21.think([outP11, outP12]);

  console.log('----------- Thinking:');
  console.log(`- INPUT = [${[...x]}], OUTPUT = [${outP21}], TARGET = [${target}]`);

  const errorP21 = 0.5 * Math.pow(target - outP21, 2);
  const errorTotal = errorP21;

  console.log('- errorTotal = ', errorTotal);

  outP21.adjust();
};
