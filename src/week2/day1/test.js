
class Animal {
  constructor(type,color,name) {
    this.type = type;
    this.color =  typeof color == "undefined" ? 'No info' : color;
    this.name = typeof name == "undefined" ? 'No info' : name;        
  }
  get talk() {
    if (this.color != 'No info' || this.name != 'No info')
      console.log(`Hi, I'm a ${this.color} ${this.type} named ${this.name}`);
    else
      console.log(`Hi, I'm an Animal, but also a ${this.type}`);
  }
  set setType (type) {
    this.type = type;
  }
  set setAge (age) {       
    this.age =  age == 0 ? Math.floor((Math.random() * 20) + 1) : age;   
  }
  get getAge (){
    return this.age;
  }
  get isOld (){    
    if(this.age >12)
      console.log(`I'm an old ${this.type}`);
    else if (this.age <4)
      console.log(`I'm a young ${this.type}`);
    else
      console.log(`I'm a ${this.age}-year-old ${this.type}`);
  }
}

let rabbit = new Animal("Rabbit","Red","Carlos");
rabbit.talk;
rabbit.setType='Big Rabbit';
rabbit.talk;
rabbit.setAge=0; // = 0 to get random age
console.log("Age : " ,rabbit.getAge);


console.log("\nPart 2: \n\n");

class Dog extends Animal {
    constructor(color,name){
      super('Dog',color,name);
      super.setAge=0;
    }
    set setBreed (breed){
      this.breed = breed;
    }
    get talk(){
      if ( typeof this.breed == "undefined" )
        console.log(`Hi, I'm an Animal, but also a ${this.type}`);
      else
        console.log(`Hi, I'm a ${this.breed} ${this.type}`);
    }
}

let doggy = new Dog ();
doggy.talk;
doggy.breed='Golden Retriever';
doggy.talk;