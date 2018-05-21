// PERSON INTERFACE
interface Person {
    firstName: string,
    lastName?: string,
    birthday?: Date
}

// CONTACT INTERFACE
interface NumberConfig {
    n?: string;
}

function getNumber(config: NumberConfig): { n: string; } {
    let newNumber = {n: '(480)-555-5515'};
    return newNumber;
}

interface Contact {
    phoneNumber: string,
    email?: string,
    slack?: string,
    formatNumber: Function
}

// CONTACT CARD
interface ContactCard extends Person, Contact {
    sendMessage: Function,
    addToFavorites: Function
}

// CHILD CLASS
class Sam implements Person, Contact, ContactCard {
    firstName;
    phoneNumber;
    formatNumber;  
    sendMessage;
    addToFavorites;
    favorites;
    
    constructor(name, func) {
        this.favorites = [];
        this.firstName = name;
        this.formatNumber = func('1231231234').n;
        this.phoneNumber = this.formatNumber;
        this.sendMessage = function() {
            console.log('Hello ' + this.firstName)
        }
        this.addToFavorites = function() {
            this.favorites.push(this.firstName)
        }
    }
}

let newSam = new Sam('Sam', getNumber);
console.log(newSam);