// To include you pet to the list, simply add a JSON object to the pets array, ordering by "name"
// and following this schema:
/*
  {
    "name": "Your pet's name",
    "owner": "yourGithubUsername",
    "type": "Which animal, for example: dog (breed), fish, cat",
    "description": "Anything that describes your buddy. Keep it polite :)",
    "img": "The URL to a picture of your pet, or null if you don't have one.
    // Make sure the image is not too large, 400x400 is a good size"
  },
*/

export const pets = [
  {
    "name": "Molly",
    "owner": "vspedr",
    "type": "poodle",
    "description": "A cute, but energetic poodle. She's now a little star in a better place.",
    "img": 'https://image.ibb.co/dz9Opb/molly.jpg'
  },
  {
    "name": "Oripo",
    "owner": "vspedr",
    "type": "Betta fish",
    "description": "A dark blue, almost black bubble maker. Eats a lot. Sometimes too much.",
    "img": null
  },
];
