/**
 * A function to add two numbers.
 *
 * @param {number} num1 - the first number to be added
 * @param {number} num2 - the second number to be added
 * @return {number} the sum of num1 and num2
 */
function sumar(num1, num2){
    return num1 + num2
}

/**
 * A function that subtracts num2 from num1.
 *
 * @param {number} num1 - the first number
 * @param {number} num2 - the second number
 * @return {number} the result of subtracting num2 from num1
 */
function restar(num1, num2){
    return num1 - num2
}

/**
 * Multiplies two numbers.
 *
 * @param {number} num1 - The first number to be multiplied
 * @param {number} num2 - The second number to be multiplied
 * @return {number} The result of multiplying num1 and num2
 */
function multiplicar(num1, num2){
    return num1 * num2;
}

/**
+ * Divide two numbers.
+ *
+ * @param {number} num1 - The first number
+ * @param {number} num2 - The second number
+ * @return {number} The result of the division
+ */
function dividir(num1, num2){
    return num1 / num2;
}

module.export = {sumar, restar, multiplicar, dividir}