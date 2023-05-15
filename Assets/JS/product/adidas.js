// Biến để lưu API
var dataStore = 'http://localhost:3000/Adidas';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(Adidas) {
        // Sử dụng map để lặp qua phần tử 
        var htmls = Adidas.map(function(Adida) {
            return `<li>
           <a href="" style = {textDecoration: none} >
            <div class = "product-${Adida.id}" >
                    <a href="${Adida.links}">
                    <img class ="image" src="${Adida.img}" alt="">
                
                    <a class = "title" href="">${Adida.name}</a>
<br>
                    <a class = "price p${Adida.id}" href="">${Adida.price}</a>

           </div>
           </a>
            </li >`
        })
        var html = htmls.join('');
        document.getElementById('list').innerHTML = html
        console.log(html)
    })