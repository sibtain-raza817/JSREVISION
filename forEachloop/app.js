// let coding = ["python", "cpp", "java", "ruby", "js"];


// let values = coding.forEach((items)=>{
//     console.log(items);
//     return items
// })

// console.log(values);
/*
forEach does not return any value
python
cpp
java
ruby
js
undefined
*/

//but filter method return new array means return somthings

// const myNums = [1,2,3,4,5,6,7,8,9,10];

// let newNums = myNums.filter((num) => num > 5);

// return karna padega agr is trah likhoge tab
// agr curly bracket laga diya means : you have to return 
// let nums = myNums.filter((num)=>{
//     return num > 6;
// })
// console.log(nums);


const books = [
  {
    title: "Atomic Habits",
    genre: "Self Help",
    publishDate: "2018-10-16",
    edition: "1st Edition"
  },
  {
    title: "The Alchemist",
    genre: "Fiction",
    publishDate: "1988-04-15",
    edition: "25th Anniversary Edition"
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publishDate: "2008-08-01",
    edition: "1st Edition"
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Programming",
    publishDate: "1999-10-30",
    edition: "20th Anniversary Edition"
  },
  {
    title: "Rich Dad Poor Dad",
    genre: "Finance",
    publishDate: "1997-04-01",
    edition: "2nd Edition"
  },
  {
    title: "The Psychology of Money",
    genre: "Finance",
    publishDate: "2020-09-08",
    edition: "1st Edition"
  },
  {
    title: "Deep Work",
    genre: "Productivity",
    publishDate: "2016-01-05",
    edition: "1st Edition"
  },
  {
    title: "Think and Grow Rich",
    genre: "Self Help",
    publishDate: "1937-03-01",
    edition: "Revised Edition"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Productivity",
    publishDate: "1997-06-26",
    edition: "1st Edition"
  },
  {
    title: "The Hobbit",
    genre: "Productivity",
    publishDate: "1937-09-21",
    edition: "Illustrated Edition"
  }
];

let result = books.filter((bk)=> bk.genre === 'Productivity')

console.log(result);

/*
RESULT

[
  {
    title: 'Deep Work',
    genre: 'Productivity',
    publishDate: '2016-01-05',
    edition: '1st Edition'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: 'Productivity',
    publishDate: '1997-06-26',
    edition: '1st Edition'
  },
  {
    title: 'The Hobbit',
    genre: 'Productivity',
    publishDate: '1937-09-21',
    edition: 'Illustrated Edition'
  }
]
  */