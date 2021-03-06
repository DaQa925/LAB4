var Complex = /** @class */ (function () {
    function Complex(realNumber, imaginaryNumber) {
        this.real = realNumber;
        this.imaginary = imaginaryNumber;
    }
    Complex.prototype.getReal = function () {
        return this.real;
    };
    Complex.prototype.getImaginary = function () {
        return this.imaginary;
    };
    Complex.prototype.add = function (complexNumber) {
        this.real += complexNumber.getReal();
        this.imaginary += complexNumber.getImaginary();
    };
    Complex.prototype.subtract = function (complexNumber) {
        this.real -= complexNumber.getReal();
        this.imaginary -= complexNumber.getImaginary();
    };
    Complex.prototype.modulus = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.showValue = function () {
        var sign;
        if (this.imaginary < 0) {
            sign = "";
        }
        else {
            sign = "+";
        }
        return this.real + sign + this.imaginary + "i";
    };
    return Complex;
}());
var liczba1 = new Complex(4, 2);
var liczba2 = new Complex(18, 2);
liczba1.add(liczba2);
console.log(liczba1.showValue());
liczba1.subtract(liczba2);
liczba1.subtract(liczba2);
console.log(liczba1.showValue());
console.log(liczba2.modulus());
