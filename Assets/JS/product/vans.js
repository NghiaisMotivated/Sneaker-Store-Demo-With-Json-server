// Biến để lưu API
var dataStore = 'http://localhost:3000/Vans';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(vans) {
        // Sử dụng map để lặp qua phần tử 
        var htmls = vans.map(function(van) {
            return `<li>
           <a href="" style = {textDecoration: none} >
            <div class = "product-${van.id}" >
                    <a href="${van.links}">
                    <img class ="image" src="${van.img}" alt="">
                
                    <a class = "title" href="">${van.name}</a>
<br>
                    <a class = "price p${van.id}" href="">${van.price}</a>

           </div>
           </a>
            </li >`
        })
        var html = htmls.join('');
        document.getElementById('list').innerHTML = html
        console.log(html)
    })