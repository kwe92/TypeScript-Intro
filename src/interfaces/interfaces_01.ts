const bookJSON: Book = {
    author: "Shunryū Suzuki",
    title: "Zen Mind, Beginner's Mind",
    op: "1970",
    about:
        "Zen Mind, Beginner's Mind is a book of teachings by Shunryu Suzuki, a compilation of talks given to his satellite Zen center in Los Altos, California.",
  };

  interface Book {
    author: string;
    title: string;
    op: string;
    about: string;
  }

  const  parseBook = (json: Map<string,string>) => {
 return {
    author: json.get("author"),
    title: json.get("title"),
    op: json.get("op"),
    about: json.get("about"),
  }
  }

  // from Pragmatic Programmer Illustration figure 3.4

  interface AddProduct {
    id: number;
    name: string;
    orderCode: number;
  }

//   console.log(parseBook(bookJSON))

