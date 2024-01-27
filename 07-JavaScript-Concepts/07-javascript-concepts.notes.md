# JavaScript Key Concepts

#### Data types

- null
- undefined
- number
- bigint
- string
- boolean
- symbol

- -2 53 to 2 53 - 1 is range for integer with number being double precision floating point
- All JavaScript objects have prototypes. A prototype is an implicit reference to another object that is queried in property lookup. If an object does not the specific property, it's prototype is checked and so on. Inheritance in JS. JS is a prototypal language

- Functions are first class citizen in JS. 
- A function is an object and there a value that can be used like any other value
- A function can be returned from another function
- A function can be passed as an argument to another function
- The this keyword for a function within object refers to the object on which the function is called
- Function have a call method that can be used to set their this content
- Fat arrow function do not have a prototype

Three common approaches and variations to creating a prototype chain in JavaScript
1. Functional
2. Constructor Functions
3. class-syntax constructors

- The Property Descriptor is JS object that describes the characteristics of the properties on another object being created

- `Object.getOwnPropertyDescriptor`  can be used to get a property descriptor on any object
- `Object.getPrototypeOf` can be used to inspect the prototype of an object
- `Object.setPrototypeOf(child.prototype, parent.prototype)` can be used to set the prototype for a child
- `util.inherits` under the hood used `Object.setPrototypeOf`

- `Wolf.call(this, name + ' the dog')`  is equvalent to `super(name + ' the dog')`