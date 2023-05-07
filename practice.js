function multiplyBiggerNumByTwo(num1, num2) {
  let bigger;
  if (num1 > num2) {
    bigger = num1;
  } else {
    bigger = num2;
  }
  return bigger * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigger;
  if (num1 > num2) {
    bigger = num1
  } else {
    bigger = num2;
  }
  return bigger / 3;
}

function eatMostTacos(sum1, sum2) {
  let moreTacos;
  if (sum1 > sum2) {
    moreTacos = sum1;
  } else {
    moreTacos = sum2;
  }
  return `I ate ${moreTacos} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog;
  if (weight1 < weight2) {
    smallDog = weight1;
  } else {
    smallDog = weight2;
  }
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
