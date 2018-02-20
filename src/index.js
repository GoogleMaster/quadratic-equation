module.exports = function solveEquation(equation) {
  // your implementation
    equation = equation.replace(/\s+/g, '');
    var first = equation.match(/^[-]?\d+/g);
    var second = equation.match(/x[^]2[+-]\d+[*]x/g)[0].match(/[+-]\d+/g);
    var third = equation.match(/[+-]\d+$/g);
    first = +first[0];
    second = +second[0] / first;
    third = +third[0] / first;
    //first = 1;
    var d = Math.pow(second,2) - 4 * third;
    var x1 = (-second - Math.sqrt(d)) / 2;
    var x2 = (-second + Math.sqrt(d)) / 2;
    return [x1, x2];
}