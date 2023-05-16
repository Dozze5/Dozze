
console.log('helllllo');


let Rectangle = {
    length: 1,
    breadth:2,

    draw: ()=>{
        console.log('Drawing');
    },
};
Rectangle.draw();

//FACTORY FUNCTION

function createRectangle(length,breadth){
    return Rectangle = {
        length,
        breadth,
    
        draw: ()=>{
            return 'Drawing';
        },
    };
   
}
Rectangle.draw();

//OBJECT USING FACTORY FUNCTION

let rectangleSecond = createRectangle(4,5);
let rectangleThird = createRectangle(5,6);
let rectangleFourth = createRectangle(10,15);

console.log(rectangleSecond);
console.log(rectangleThird);
console.log( rectangleFourth);


// CONSTRUCTOR FUNCTION

function createSquare1(length,breadth){
    this.length = length ;
    this.diagonal = breadth;
    this.draw = ()=>{
        return 'draw';
    }
}
//new keyboard
let sqrObject = new createSquare1(8,9);

sqrObject.color = 'yellow';
console.log(sqrObject);

console.log(createRectangle.constructor);


let square = {
    side: 2,
    diagonal:4
};

//FOR-IN loop
for(let key in square)
{
    console.log(key,square[key]);
}

//FOR-OF loop only for iterable

for(let key of Object.entries(square))
{
 console.log(key)
}

//attributes in objects

let square2 = Object.assign({},square);


square2.side = 5;
console.log(square2)
console.log(square)

let sqr = {...square};
