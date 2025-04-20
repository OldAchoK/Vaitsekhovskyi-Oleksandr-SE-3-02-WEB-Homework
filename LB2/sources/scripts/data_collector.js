const buttonsList = [
  '#minStartDeclaration',
  '#minStartExpression',
  '#minStartLambda',
  '#personStartDeclaration',
  '#personStartLambda',
  '#threeFields',
  '#arguments',
  '#lambdaOverflow',
  '#functionReturn',
];

const eventsList = [
  'minDataCollectedDeclaration',
  'minDataCollectedExpression',
  'minDataCollectedLambda',
  /*'personCollectedDeclaration',*/
  /*'personCollectedLambda',*/
];

function minCollector() {
  const a = prompt('a:', 0);
  const b = prompt('b:', 0);
  return {a, b};
}

function personCollector() {
  const firstName = prompt('First name: ', 'John');
  const lastName  = prompt('Last name: ', 'Doe');
  const surName   = prompt('Surname: ',   '');
  const emptySurname = 'None';
  if(surName && true) {
    return {firstName, lastName, surName};
  } else {
    return {firstName, lastName, emptySurname};
  }
}

function threeFields(func, a, b)
{
  return func(a, b);
}

function argumentsOverdrive(a)
{
  let sum = 0;
  for(let index = 0; index < arguments.length; index ++)
  {
    sum += parseFloat(arguments[index]);
  }
  return sum;
}

function functionReturn(input)
{
  const regularList = [
    /jpeg/,
    /jpg/,
    /png/,
    /webp/,
    /gif/,
  ];

  const labelList = [
    'jpeg',
    'jpg',
    'png',
    'webp',
    'gif',
  ]
  
  const output = (pattern) => alert("The program is working on " + pattern);

  for(let index = 0; index < regularList.length; index++)
  {
    if(regularList[index].test(input)) {
      return output(labelList[index]);
    }
  }
  return alert("The ptogram is working on nothing");
}

for(let index = 0; index < buttonsList.length; index++) {
  switch (index) {
    case 0:
    case 1:
    case 2:
      let startMinButton = document
      .querySelector(buttonsList[index])
      .addEventListener("click", () => {
        const data = minCollector();
        const event = new CustomEvent(eventsList[index], {
        detail: data
        });
        document.querySelector('body').dispatchEvent(event);
      });
      break;
    case 3:
      let startPersonButton = document
      .querySelector(buttonsList[index])
      .addEventListener("click", () => {
        const data = personCollector();
        if(data.surName && true) {
          alert("Person name: " + data.firstName + ", last name: " + data.lastName + ", surname: " + data.surName);
        } else {
          alert("Person name: " + data.firstName + ", last name: " + data.lastName);
        }
      });
      break;
    case 4:
      let startPersonLambdaButton = document
      .querySelector(buttonsList[index])
      .addEventListener("click", () => {
        const firstName = prompt('First name: ', 'John');
        const lastName  = prompt('Last name: ', 'Doe');
        const surName   = prompt('Surname: ',   '');
        const emptySurname = 'None';
        const personData = (a, b, c) => c && true ? {a, b, c} : {a, b, emptySurname};
        const personVar = personData(firstName, lastName, surName);
        if(personVar.c && true) {
          alert("Person name: " + personVar.a + ", last name: " + personVar.b + ", surname: " + personVar.c);
        } else {
          alert("Person name: " + personVar.a + ", last name: " + personVar.b);
        }
      });
      break;
    case 5:
      let startThreeFields = document
      .querySelector(buttonsList[index])
      .addEventListener("click", () => {
        sum = (x, y) => x + y;
        const first = prompt('First number: ', 0);
        const second = prompt('Second number: ', 0);
        alert("Result of sum of " + first + " and " + second + " is " + threeFields(sum, parseFloat(first), parseFloat(second)));
      });
      break;
    case 6:
      let startArguments = document
      .querySelector(buttonsList[index])
      .addEventListener("click", () => {
        /*let inputArguments = [];
        while(true){
          let cache = prompt('Argument: ', 0);
          inputArguments.push(cache);
          if(cache == 0){
            break;
          }
        }*/
        alert("Result of sum is: " + argumentsOverdrive(1,2));
        alert("Result of sum is: " + argumentsOverdrive(1));
        alert("Result of sum is: " + argumentsOverdrive(1,2,5,7));
      });
      break;
    case 7:
      let startLambdaOverflow = document
      .querySelector(buttonsList[index])
      .addEventListener("click", () => {
        const lambdaSum = (...nums) => {
          let total = 0;
          for (let n of nums) total += n;
          return total;
        };
        alert("Result of sum is: " + lambdaSum(4,2));
        alert("Result of sum is: " + lambdaSum(3));
        alert("Result of sum is: " + lambdaSum(5,6,5,7));
      });
      break;
    case 8:
      let startFunctionReturn = document
      .querySelector(buttonsList[index])
      .addEventListener("click", () => {
        const input = prompt('Input string: ', 'example.webp');
        functionReturn(input);
      });
      break;
    default:
      break;
  }

  
}