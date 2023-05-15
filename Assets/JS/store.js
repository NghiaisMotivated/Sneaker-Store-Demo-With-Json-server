// Tạo biến để lưu API
var locatee = 'http://localhost:3000/Locate';

// Gọi dữ liệu từ localhost thông qua biến 
fetch(locatee)
    .then(function(response) {
        return response.json()
    })
    .then(function(locates) {
        // Sử dụng map để lập qua từng phần tử object trong mảng 
        var stores = locates.map(function(locate) {
            return `<div class = "from-${locate.id} d-flex">
        <div class = "section-1 col-md-4">
           <div class= "box"> 
                <h3 class = "from">${locate.name}</h3>
           </div>
            <p><b>Location:</b>  ${locate.locate}</p>
            <a href="">Find the store near you: <i class="fa-solid fa-location-dot"></i></a>
        </div>
        
        <div class = "section-2 col-md-4">
            <img src="${locate.pic}" alt="">
        </div>
            </div>
            
            <hr>`
        })
        var section1 = stores.join('');
        document.getElementById('location').innerHTML = section1;
        console.log(section1)
    })