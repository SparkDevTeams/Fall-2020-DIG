const questions = [
  {
    ques: "It's a nice and sunny day outside, do you...:",
    ans: [
      {
        value: 0,
        ans: "Stay inside it's really hot and the A/C is nice and cold",
      },
      {
        value: 10,
        ans:
          'Get together with some friends, maybe you can freshen up at the pool or go get some ice cream!',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques: 'You just finished drinking a water bottle, do you...:',
    ans: [
      {
        value: 0,
        ans: 'Throw it in the trash.',
      },
      {
        value: 10,
        ans: 'Put it aside for recycling.',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques: 'Your phone/tablet is starting to get a little too slow, do you...:',
    ans: [
      {
        value: 10,
        ans: 'Try and see if you can get it fixed.',
      },
      {
        value: 5,
        ans:
          'Get a new one and keep the old one—you never know when you might need it',
      },
      {
        value: 0,
        ans: 'Get a new one and donate/sell the older one.',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques:
      "You're hungry so you're gonna go to the kitchen to make a sandwich, do you...:",
    ans: [
      {
        value: 0,
        ans: "Leave the light on, it's only going to be a minute anyway!",
      },
      {
        value: 10,
        ans: 'Turn the light off, just in case.',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques: 'Today is one of the hottest days in the year! Do you...:',
    ans: [
      {
        value: 0,
        ans: "Take a hot shower, I can't stand the water when it's cold!",
      },
      {
        value: 10,
        ans: "Take a cold shower, it's pretty hot after all.",
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques:
      "It's time for you and your other friends to go to your best friend's house! Do you...:",
    ans: [
      {
        value: 0,
        ans: 'Everyone gets there in their own cars.',
      },
      {
        value: 8,
        ans: 'Carpool together.',
      },
      {
        value: 10,
        ans: 'Bike/walk to his house.',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques:
      "You got a new clothes! But you have some older ones you don't wear anymore, do you...:",
    ans: [
      {
        value: 8,
        ans: "Toss the old ones out, they're probably too old anyway...",
      },
      {
        value: 10,
        ans:
          'Try and separate some that could be in better shape and donate them',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques:
      'How many electronic devices do you own (smartphones, tablets, gaming consoles, computers, etc)',
    ans: [
      {
        value: 10,
        ans: 'Less than 2',
      },
      {
        value: 5,
        ans: 'Between 2 and 4',
      },
      {
        value: 0,
        ans: 'More than 5',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques: "When you're going on a vacation, do you... ",
    ans: [
      {
        value: 0,
        ans: 'Travel by plane',
      },
      {
        value: 8,
        ans: 'Travel by bus',
      },
      {
        value: 10,
        ans: 'Travel by train',
      },
      {
        value: 4,
        ans: 'Travel by car',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques: 'When your parent get groceries, do they...:',
    ans: [
      {
        value: 4,
        ans: 'Buy from big chains',
      },
      {
        value: 7,
        ans: 'Smaller family owned supermarkets',
      },
      {
        value: 10,
        ans: 'Local farmer markets',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques:
      'How many times per week do you eat meat (beef, chicken, pork, etc.)?',
    ans: [
      {
        value: 10,
        ans: 'None',
      },
      {
        value: 8,
        ans: 'Less than 2',
      },
      {
        value: 5,
        ans: 'Between 2 and 4',
      },
      {
        value: 0,
        ans: 'More than 5',
      },
    ],
    type: 'multipleChoice',
  },
  {
    ques: 'On average, how long do you keep the lights on in a day?',
    ans: ['Only when using the room', 'All day'],
    type: 'slider',
  },
  {
    ques: 'On average, how much do you commute to school?',
    ans: ['Less than 5 blocks', 'Next town over'],
    type: 'slider',
  },
  {
    ques: "When you're brush your teeth, do you leave the water running?",
    ans: [
      {
        value: 5,
        ans: 'Yes',
      },
      {
        value: 0,
        ans: 'No',
      },
    ],
    type: 'multipleChoice',
  },
];

export default questions;
