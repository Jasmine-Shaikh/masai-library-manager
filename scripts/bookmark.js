var bookmarkList;

if (localStorage.getItem('bookmark-list')) {
    bookmarkList = JSON.parse(localStorage.getItem('bookmark-list'))

    bookmarkList.forEach(function(e, i) {

        var bookmarkListContainer = document.createElement("tr");
        bookmarkListContainer.setAttribute("class", "bookmarkListContainer");
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

        var remove = document.createElement("td");
        remove.innerText = "REMOVE"
        remove.setAttribute("class", "remove");
        remove.style.cursor = "pointer"
        remove.addEventListener("click", function() {
            bookmarkList.splice(i, 1);
            localStorage.setItem('bookmark-list', JSON.stringify(bookmarkList));
            window.location.reload();

        })

        bookmarkListContainer.append(serial,name,author,description,date,category, price, remove)
        document.getElementById("tableData").append(bookmarkListContainer);

    })
 
}