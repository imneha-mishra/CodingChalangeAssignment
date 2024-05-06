const books = [
    {
        title : "The Namesake",
        author : "jhumpa Lahri",
        year : 2010
    },
    {
        title : "The God of Small Things",
        author : "Arundhsti Roy",
        year : 1997
    },
    {
        title : "The White Tiger",
        author : "Aravind Adiga",
        year : 2018
    },
    {
        title : "The Suitable Boy",
        author : "Vikram Seth",
        year : 1993
    },
    {
        title : "Midnight's Children",
        author : "Salman Rushdie",
        year : 1981
    }
];

const filterdBooks = books.filter((book)=>{
    return book.year >= 2010;
})
 const result = filterdBooks.map((book)=>{
    return {
        ...book,
        author:book.author.toUpperCase(),
    };
 });
 console.log(result);





