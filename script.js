
const imageContainer = document.querySelector('.image-container');
//fetch all the data from API
fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((product) => {
        console.log(product);
        const productArray = product.products;
        console.log("Product Array: ", productArray);
        let count = 0;
        productArray.map((myproduct) => {
            console.log('Product ID: ',myproduct.id);
            //assign all the give data to it's place in html
            imageContainer.innerHTML += `
            <div class="card">
                <div class="image" id="image${count}">
                    <img class="thumbnail" src="${myproduct.thumbnail}" alt="image">
                    <img class="display-img" src="${myproduct.images[0]}" alt="image">
                </div>
                <div class="information">
                    <div class="brand-id">
                        <div class="section1">
                            <div class="title">${myproduct.id}: ${myproduct.title}</div>
                            <div class="brand">${myproduct.brand}</div>
                        </div>
                        <div class="section2">
                            <div class="category">${myproduct.category}</div>
                        </div>
                    </div>
                    <div class="description">${myproduct.description}</div>
                    <div class="price-discount">
                        <div class="price">&#x20B9 ${myproduct.price}</div>
                        <div class="discount"><u>${myproduct.discountPercentage} off</u></div>
                    </div>
                    <div class="rating-stock">
                        <div class="rating">${myproduct.rating} &#10026</div>
                        <div class="stock">Stock: ${myproduct.stock}</div>
                    </div>
                </div>
            </div>`
        })
    })