
showHome();
function showList() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/products",
        headers: {
            'Content-Type': 'application/json',

        },
        success: (products) => {
            console.log(products)
            let html = '';
            products.map (item =>{
                html += `
                <tr>
                    <td>${item.idProduct}</td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.image}</td>
                    <td>${item.nameCategory}</td>
                    <td>${item.description}</td>
                    <td>${item.quantity}</td>
                    <td><button>delete</button></td>
                    <td><button>edit</button></td>
                </tr>`
            })
            $('#tbody').html(html)
        }
    })
}

function showFormAdd() {
    $('#body').html(`
    <div>
        <table border="1">
        <thead>
        <tr>
            <th>name</th>
            <th>price</th>
            <th>image</th>
            <th>category</th>
            <th>description</th>
            <th>quantity</th>
            <th>action</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td><input type="text" id="name"></td>
                <td><input type="text" id="price"></td>
                <td><input type="text" id="image"></td>
                <td><input type="text" id="category"></td>
                <td><input type="text" id="description"></td>
                <td><input type="text" id="quantity"></td>
                <td><button onclick="add()">ADD</button></td>
            </tr>
        </tbody>
    </table>
    </div>
    `)
}

function showHome () {
    $('#body').html(`
    <table border="1">
        <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>image</th>
            <th>category</th>
            <th>description</th>
            <th>quantity</th>
            <th colspan="2">action</th>
        </tr>
        </thead>
        <tbody id="tbody">

        </tbody>
    </table>
    `)
    showList()
}

function add() {
    let name = $('#name').val();
    let price = $('#price').val();
    let image = $('#image').val();
    let category = $('#category').val();
    let description = $('#description').val();
    let quantity = $('#quantity').val();
    let product = {
        name: name,
        price: price,
        image: image,
        category: category,
        description: description,
        quantity: quantity
    }
    console.log(product)
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/products",
        headers: {
            'Content-Type': 'application/json',

        },
        data: JSON.stringify(product),
        success: () => {
            showHome()
        }

    })
}