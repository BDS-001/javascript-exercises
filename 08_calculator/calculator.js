const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(nums) {
  
  if (nums.length === 0) {
    return 0
  } else {
    return nums.reduce((total, num) => {
      return total + num
    }, 0)
  };
};

const multiply = function(nums) {
  if (nums.length === 0) {
    return 0
  } else {
    let total = nums[0]
    nums.splice(0, 1)
    for (i=0;i<nums.length;i++) {
      total *= nums[i]
    }
    return total
  };
};

const power = function(base, exponent) {
	let total = base
  for (i=1;i<exponent;i++) {
    total *= base;
  }
  return total
};

const factorial = function(factor) {
  if (factor === 0) {
    return 1
  }

	total = factor
  factor -= 1
  for (i=factor;i>0;i--) {
    total *= i
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
