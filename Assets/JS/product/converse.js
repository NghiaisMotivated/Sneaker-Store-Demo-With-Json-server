// Biến để lưu API
var dataConverse = 'http://localhost:3000/coverses';

fetch(dataConverse)
    .then(function(response) {
        return response.json();
    })
    .then(function(coverses) {
        // Sử dụng map để lặp qua phần tử 
        var htmls = coverses.map(function(converse) {
            return `<li>
           <a href="" style = {textDecoration: none} >
            <div class = "product-${coverse.id}" >
                    <a href="${coverse.links}">
                    <img class ="image" src="${coverse.img}" alt="">
                
                    <a class = "title" href="">${coverse.name}</a>
<br>
                    <a class = "price p${coverse.id}" href="">${coverse.price}</a>

           </div>
           </a>
            </li >`
        })
        var html = htmls.join('');
        document.getElementById('list').innerHTML = html
        console.log(html)
    })