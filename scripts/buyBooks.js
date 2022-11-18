var buyList;

if (localStorage.getItem('buy-list')) {
    buyList = JSON.parse(localStorage.getItem('buy-list'))

    buyList.forEach(function(e, i) {

        var buyListContainer = document.createElement("tr");
        buyListContainer.setAttribute("class", "buyListContainer");
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

        buyListContainer.append(serial,name,author,description,date,category, price, remove)
        document.getElementById("tableData").append(buyListContainer);

    })
 
}