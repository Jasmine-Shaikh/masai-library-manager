var bookList;

if (localStorage.getItem('book-list')) {
    bookList = JSON.parse(localStorage.getItem('book-list'))
} else {
    bookList = [];
}

document.querySelector("form").addEventListener("submit", submitDetails);

function submitDetails() {
    event.preventDefault()

    if (document.getElementById("name").value === null ||
     document.getElementById("author").value === null || 
     document.getElementById("description").value === null || 
     document.getElementById("date").value === null || 
     document.getElementById("category").value === null || 
     document.getElementById("price").value === null) {
        alert('Please fill all details!')
    } else {
        bookList.push(
            {
                name: document.getElementById("name").value,
                author: document.getElementById("author").value,
                description: document.getElementById("description").value,
                date: document.getElementById("date").value,
                category: document.getElementById("category").value,
                price: document.getElementById("price").value,
            }
        )
        localStorage.setItem('book-list', JSON.stringify(bookList));
        alert("Book details added successfully!");
        window.location.href = './dashboard.html'
    }
}