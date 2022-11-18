var bookList;

if (localStorage.getItem('book-list')) {
    bookList = JSON.parse(localStorage.getItem('book-list'))

    bookList.forEach(function(e, i) {

        var bookListContainer = document.createElement("tr");
        bookListContainer.setAttribute("class", "bookListContainer");
        var serial = document.createElement("td");
        serial.innerText = i+1;

        var name = document.createElement("td");
        name.innerText = e.name;

        var author = document.createElement("td");
        author.innerText = e.author;

        var description = document.createElement("td");
        description.innerText = e.description;

        var date = document.createElement("td");
        date.innerText = e.date;

        var category = document.createElement("td");
        category.innerText = e.category;
        
        var price = document.createElement("td");
        price.innerText = "Rs. " + e.price;

        var buy = document.createElement("td");
        buy.innerText = "BUY"
        buy.setAttribute("class", "buy");
        buy.addEventListener("click", function() {
            bookList.splice(i, 1);
            localStorage.setItem('book-list', JSON.stringify(bookList));
            window.location.reload();

        })

        var bookmark = document.createElement("td");
        bookmark.innerText = "BOOKMARK"
        bookmark.setAttribute("class", "bookmark");
        bookmark.addEventListener("click", function() {

            bookList.splice(i, 1);
            localStorage.setItem('book-list', JSON.stringify(bookList));
            window.location.reload();
        })
        bookListContainer.append(serial,name,author,description,date,category, price, buy,bookmark)
        document.getElementById("tableData").append(bookListContainer);

    })
 
}