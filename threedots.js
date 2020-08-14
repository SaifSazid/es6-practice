const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 33, 39];

const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// console.log(allAges);

const allAges2 = [...ages, ...ages2, 5, ...ages3]
// console.log(allAges2);

const business = 650;
const minister = 450;
const shochib = 250;
const takPoisha = [650, 450, 250];
// const maximum = Math.max(business, minister, shochib);
const maximum = Math.max(...takPoisha);
console.log(maximum);