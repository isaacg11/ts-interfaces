function getNumber(config) {
    var newNumber = { n: '(480)-555-5515' };
    return newNumber;
}
var Sam = /** @class */ (function () {
    function Sam(name, func) {
        this.favorites = [];
        this.firstName = name;
        this.formatNumber = func('1231231234').n;
        this.phoneNumber = this.formatNumber;
        this.sendMessage = function () {
            console.log('Hello ' + this.firstName);
        };
        this.addToFavorites = function () {
            this.favorites.push(this.firstName);
        };
    }
    return Sam;
}());
var newSam = new Sam('Sam', getNumber);
console.log(newSam);
