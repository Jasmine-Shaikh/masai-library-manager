var bookList;
var bookmarkList;
var buyList;

if (localStorage.getItem('bookmark-list')) {
    bookmarkList = JSON.parse(localStorage.getItem('bookmark-list'))
} else {
    bookmarkList = [];
}

if (localStorage.getItem('buy-list')) {
    buyList = JSON.parse(localStorage.getItem('buy-list'))
} else {
    buyList = [];
}




function displayBooks(bookList){
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
            buy.style.cursor = "pointer"
            buy.addEventListener("click", function() {
    
                buyList.push(e)
                localStorage.setItem('buy-list', JSON.stringify(buyList));
                bookList.splice(i, 1);
                localStorage.setItem('book-list', JSON.stringify(bookList));
                window.location.reload();
    
            })
    
            var bookmark = document.createElement("td");
            bookmark.innerText = "BOOKMARK"
            bookmark.setAttribute("class", "bookmark");
            bookmark.style.cursor = "pointer"
            bookmark.addEventListener("click", function() {
                
                bookmarkList.push(e)
                localStorage.setItem('bookmark-list', JSON.stringify(bookmarkList));
                bookList.splice(i, 1);
                localStorage.setItem('book-list', JSON.stringify(bookList));
                window.location.reload();
            })
            bookListContainer.append(serial,name,author,description,date,category, price, buy,bookmark)
            document.getElementById("tableData").append(bookListContainer);
    
        })
     
    }
}

displayBooks(bookList)


//-----------Sorting Incomplete------------------------

// var bookListCopy = JSON.parse(JSON.stringify(bookList));


// function lowToHigh() {
//     bookListCopy.sort(function(a, b) {
//         return a.price - b.price;
//     })

//     displayBooks(bookListCopy);

// };

// function highToLow() {

//     bookListCopy.sort(function(a, b) {
//         return b.price - a.price;
//     })

//     displayBooks(bookListCopy);

// };

