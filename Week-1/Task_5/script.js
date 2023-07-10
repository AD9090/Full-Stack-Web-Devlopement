let books=["Anna Karenina by Leo Tolstoy",
           "The Great Gatsby by F. Scott Fitzgerald",
           "Middlemarch by George Eliot"]

function f(books){
  for(arg of books){
    document.write(arg+"<br>")
  }
}

f(books);