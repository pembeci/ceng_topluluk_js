const b = 123;
const msg = "script loaded";

function talk() {
    alert("Miyav. My name is " + this.name);
};

const cat1 = {name: "Tekir", age:3, talk: talk };

const cat2 = {name: "Mırnav", age:5, talk: talk };

function Cat(name, age) {
    this.name = name;
    this.age = age;
}

Cat.prototype.talk = function() {
    alert("Meow. My name is " + this.name);
};

Cat.prototype.spanOfLife = 15;

const cat3 = new Cat("Boncuk", 1);
console.log("cat3", cat3);

const cat4 = new Cat("Prenses", 10);
console.log("cat4", cat4);

cat4.talk = function() {
    alert("Miyav. Benim adım " + this.name);
}

Array.prototype.last = function() { return this[this.length - 1] };
Array.prototype.slice = function() { return "sliced copy" };

function HomeCat(name, age, owner) {
    Cat.call(this, name, age);
    this.owner = owner;
}
HomeCat.prototype = Object.create(Cat.prototype);

const pet1 = new HomeCat("prens", 7, "izzet");
console.log(pet1);


const but1 = document.createElement("button");
but1.innerHTML = "Button1";
but1.onclick = function() {
    alert("Button1 clicked");
    document.body.style.backgroundColor = "pink";
}
document.body.appendChild(but1);

const but2 = document.createElement("button");
but2.innerHTML = "Button2";
but2.onclick = function() {
    alert("Button2 clicked");
    document.body.style.backgroundColor = "lightblue";
}
document.body.appendChild(but2);

class MyButton {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        const but = document.createElement("button");
        but.innerHTML = this.name;
        but.onclick = function() {
            console.log("onclick's this", this);
            alert(this.name + " likes color " + this.color);
            document.body.style.backgroundColor = this.color;
        }
        document.body.appendChild(but);
    }
}

class MyButton2 {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        const but = document.createElement("button");
        but.innerHTML = this.name;
        var self = this;
        but.onclick = function() {
            console.log("onclick's this", this);
            console.log("onclick's self", self);
            alert(self.name + " likes color " + self.color);
            document.body.style.backgroundColor = self.color;
        }
        document.body.appendChild(but);
    }
}

class MyButton3 {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        const but = document.createElement("button");
        but.innerHTML = this.name;
        but.onclick = function() {
            console.log("onclick's this", this);
            alert(this.name + " likes color " + this.color);
            document.body.style.backgroundColor = this.color;
        }.bind(this);
        document.body.appendChild(but);
    }
}

class MyButton4 {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        const but = document.createElement("button");
        but.innerHTML = this.name;
        but.onclick = () => {
            console.log("onclick's this", this);
            alert(this.name + " likes color " + this.color);
            document.body.style.backgroundColor = this.color;
        };
        document.body.appendChild(but);
    }
}

// try with different MyButton classes
const bobButton = new MyButton3("Bob", "blue");
bobButton.color = "orange";