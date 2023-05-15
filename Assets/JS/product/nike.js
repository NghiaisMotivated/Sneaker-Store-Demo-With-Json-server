// Biến để lưu API
var dataStore = 'http://localhost:3000/nikes';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(nikes) {
        // Sử dụng map để lặp qua phần tử 
        var htmls = nikes.map(function(nike) {
            return `<li>
           <a href="" style = {textDecoration: none} >
            <div class = "product-${nike.id}" >
                    <a href="${nike.links}">
                    <img class ="image" src="${nike.img}" alt="">
                
                    <a class = "title" href="">${nike.name}</a>
<br>
                    <a class = "price p${nike.id}" href="">${nike.price}</a>

           </div>
           </a>
            </li >`
        })
        var html = htmls.join('');
        document.getElementById('list').innerHTML = html
        console.log(html)
    })