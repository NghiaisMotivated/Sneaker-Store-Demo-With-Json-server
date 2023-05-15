// Biến để lưu API
var dataStore = 'http://localhost:3000/RetroHigh1';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(RetroHigh1) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = RetroHigh1.map(function(RetroHigh) {
            return `
            <div class="new product-box text-center">
            <a href ="${RetroHigh.links}">
            <img src="${RetroHigh.img}" alt="" class="product-img">
           <h2 class="product-title">${RetroHigh.name}</h2>
           <span class="product-price">${RetroHigh.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-0').innerHTML = html
        console.log(htmls)
        console.log(html)
    })
// Biến để lưu API
var dataStore = 'http://localhost:3000/SmokeGrey';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(SmokeGrey) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = SmokeGrey.map(function(Smoke) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${Smoke.img}" alt="" class="product-img">
           <h2 class="product-title">${Smoke.name}</h2>
           <span class="product-price">${Smoke.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-1').innerHTML = html
        console.log(html)
    })
    // Biến để lưu API
var dataStore = 'http://localhost:3000/MetallicGold';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(MetallicGold) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = MetallicGold.map(function(Metallic) {
            return `
            <div class="new product-box text-center">
            <a href ="${Metallic.links}">
            <img src="${Metallic.img}" alt="" class="product-img">
           <h2 class="product-title">${Metallic.name}</h2>
           <span class="product-price">${Metallic.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-2').innerHTML = html
        console.log(html)
    })
// Biến để lưu API
var dataStore = 'http://localhost:3000/BlackToe';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(BlackToe) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = BlackToe.map(function(Black) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${Black.img}" alt="" class="product-img">
           <h2 class="product-title">${Black.name}</h2>
           <span class="product-price">${Black.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-3').innerHTML = html
        console.log(html)
    })
// Biến để lưu API
var dataStore = 'http://localhost:3000/chicago';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(chicago) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = chicago.map(function(chicag) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${chicag.img}" alt="" class="product-img">
           <h2 class="product-title">${chicag.name}</h2>
           <span class="product-price">${chicag.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-4').innerHTML = html
        console.log(html)
    })







// Biến để lưu API
var dataStore = 'http://localhost:3000/ChuckTaylorAllStarBlack';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(ChuckTaylorAllStarBlack) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ChuckTaylorAllStarBlack.map(function(ChuckTaylorAllStar) {
            return `
            <div class="new product-box text-center">
            <a href ="${ChuckTaylorAllStar.links}">
            <img src="${ChuckTaylorAllStar.img}" alt="" class="product-img">
           <h2 class="product-title">${ChuckTaylorAllStar.name}</h2>
           <span class="product-price">${ChuckTaylorAllStar.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-5').innerHTML = html
        console.log(html)
    })
// Biến để lưu API
var dataStore = 'http://localhost:3000/ChuckTaylorAllStarWhite';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(ChuckTaylorAllStarWhite) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ChuckTaylorAllStarWhite.map(function(ChuckTaylorAllStar) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${ChuckTaylorAllStar.img}" alt="" class="product-img">
           <h2 class="product-title">${ChuckTaylorAllStar.name}</h2>
           <span class="product-price">${ChuckTaylorAllStar.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-6').innerHTML = html
        console.log(html)
    })
    // Biến để lưu API
var dataStore = 'http://localhost:3000/SMYSTORY';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(SMYSTORY) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = SMYSTORY.map(function(MYSTORY) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${MYSTORY.img}" alt="" class="product-img">
           <h2 class="product-title">${MYSTORY.name}</h2>
           <span class="product-price">${MYSTORY.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-7').innerHTML = html
        console.log(html)
    })
// Biến để lưu API
var dataStore = 'http://localhost:3000/SVLTGe';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(SVLTGe) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = SVLTGe.map(function(SVLTG) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${SVLTG.img}" alt="" class="product-img">
           <h2 class="product-title">${SVLTG.name}</h2>
           <span class="product-price">${SVLTG.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-8').innerHTML = html
        console.log(html)
    })
// Biến để lưu API
var dataStore = 'http://localhost:3000/RECYCLEDRPETCANVAS';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(RECYCLEDRPETCANVAS) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = RECYCLEDRPETCANVAS.map(function(DRPETCANVAS) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${DRPETCANVAS.img}" alt="" class="product-img">
           <h2 class="product-title">${DRPETCANVAS.name}</h2>
           <span class="product-price">${DRPETCANVAS.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-9').innerHTML = html
        console.log(html)
    })




























// Biến để lưu API
var dataStore = 'http://localhost:3000/VANSOLDSKOOL';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(VANSOLDSKOOL) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = VANSOLDSKOOL.map(function(VANSOLDS) {
            return `
            <div class="new product-box text-center">
            <a href = "${VANSOLDS.links}">
            <img src="${VANSOLDS.img}" alt="" class="product-img">
           <h2 class="product-title">${VANSOLDS.name}</h2>
           <span class="product-price">${VANSOLDS.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-10').innerHTML = html
        console.log(html)
    })
// Biến để lưu API
var dataStore = 'http://localhost:3000/VANSOLDSKOOL36';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(VANSOLDSKOOL36) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = VANSOLDSKOOL36.map(function(VANSOLDSKOOL) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${VANSOLDSKOOL.img}" alt="" class="product-img">
           <h2 class="product-title">${VANSOLDSKOOL.name}</h2>
           <span class="product-price">${VANSOLDSKOOL.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-11').innerHTML = html
        console.log(html)
    })
    // Biến để lưu API
var dataStore = 'http://localhost:3000/FLASHSKULLS';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(FLASHSKULLS) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = FLASHSKULLS.map(function(FLASHSKULL) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${FLASHSKULL.img}" alt="" class="product-img">
           <h2 class="product-title">${FLASHSKULL.name}</h2>
           <span class="product-price">${FLASHSKULL.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-12').innerHTML = html
        console.log(html)
    })
// Biến để lưu API
var dataStore = 'http://localhost:3000/ALIENGHOSTS';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(ALIENGHOSTS) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ALIENGHOSTS.map(function(ALIENGHOST) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${ALIENGHOST.img}" alt="" class="product-img">
           <h2 class="product-title">${ALIENGHOST.name}</h2>
           <span class="product-price">${ALIENGHOST.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-13').innerHTML = html
        console.log(html)
    })
// Biến để lưu API
var dataStore = 'http://localhost:3000/VANS';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(VANS) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = VANS.map(function(VAN) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${VAN.img}" alt="" class="product-img">
           <h2 class="product-title">${VAN.name}</h2>
           <span class="product-price">${VAN.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-14').innerHTML = html
        console.log(html)
    })























    
// Biến để lưu API
var dataStore = 'http://localhost:3000/adidasStanSmithVintage';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(adidasStanSmithVintage) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = adidasStanSmithVintage.map(function(adidasStanSmith) {
            return `
            <div class="new product-box text-center">
            <a href ="${adidasStanSmith.links}">
            <img src="${adidasStanSmith.img}" alt="" class="product-img">
           <h2 class="product-title">${adidasStanSmith.name}</h2>
           <span class="product-price">${adidasStanSmith.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-15').innerHTML = html
        console.log(html)
    })
// Biến để lưu API
var dataStore = 'http://localhost:3000/GoldLabel';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(GoldLabel) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = GoldLabel.map(function(Gold) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${Gold.img}" alt="" class="product-img">
           <h2 class="product-title">${Gold.name}</h2>
           <span class="product-price">${Gold.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-16').innerHTML = html
        console.log(html)
    })
    // Biến để lưu API
var dataStore = 'http://localhost:3000/Pink';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(Pink) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Pink.map(function(Pin) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${Pin.img}" alt="" class="product-img">
           <h2 class="product-title">${Pin.name}</h2>
           <span class="product-price">${Pin.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-17').innerHTML = html
        console.log(html)
    })
// Biến để lưu API
var dataStore = 'http://localhost:3000/WhiteBlack';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(WhiteBlack) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = WhiteBlack.map(function(WhiteB) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${WhiteB.img}" alt="" class="product-img">
           <h2 class="product-title">${WhiteB.name}</h2>
           <span class="product-price">${WhiteB.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-18').innerHTML = html
        console.log(html)
    })
// Biến để lưu API
var dataStore = 'http://localhost:3000/CoreWhite';

fetch(dataStore)
    .then(function(response) {
        return response.json();
    })
    .then(function(CoreWhite) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = CoreWhite.map(function(CoreWh) {
            return `
            <div class="new product-box text-center">
            <a href ="">
            <img src="${CoreWh.img}" alt="" class="product-img">
           <h2 class="product-title">${CoreWh.name}</h2>
           <span class="product-price">${CoreWh.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-19').innerHTML = html
        console.log(html)
    })



var dataLifeStyle = "http://localhost:3000/lifeStyles";
fetch(dataLifeStyle)
    .then(function(response) {
        return response.json();
    })
    .then(function(lifeStyles) {
        // Sử dụng map để lặp qua phần tử 
        var html = lifeStyles.map(function(lifeStyle) {
            return `
         <li class ="items">   
         <a href="">
         <div class = "news-o${lifeStyle.id}">
             <img src="${lifeStyle.pic}" alt="">
             <a href="">${lifeStyle.title}</a>
             <br>
             <a href="">${lifeStyle.name}</a>
         </div>
     </a>
     </li>
            `
        })
        var lifeStyle = html.join('');
        document.getElementById('news-list').innerHTML = lifeStyle;
        console.log(lifeStyle)
    });


var dataLifeStyle = "http://localhost:3000/lifeStyles";
fetch(dataLifeStyle)
    .then(function(response) {
        return response.json();
    })
    .then(function(lifeStyles) {
        // Sử dụng map để lặp qua phần tử 
        var html = lifeStyles.map(function(lifeStyle) {
            return `

         <div class = "new id-${lifeStyle.id}">
             <img src="${lifeStyle.pic}" alt="">
                    <a href="">
                    <p class = "title" >${lifeStyle.title}</p>
                    <p class ="name">${lifeStyle.name}</p>
                    <br>
                   <p class ="day"> ${lifeStyle.day}</p>
                    </a>
         </div>

            `
        })
        var lifeStyle = html.join('');
        document.getElementById('news-list').innerHTML = lifeStyle;
        console.log(lifeStyle)
    });