const products=[
    {id: 1, name: "Điện thoại", cost: 2000000, date: "1999-02-17", brand: "LG"},
    {id: 2, name: "Máy tính bảng", cost: 20000000, date: "1999-02-17", brand: "Samsung"},
    {id: 3, name: "Macbook", cost: 30000000, date: "1999-02-17", brand: "Apple"},
    {id: 4, name: "Laptop", cost: 20000000, date: "1999-02-17", brand: "ASUS"}
];

exports.get = function getAllProducts(){
    return products;
}

exports.getOne = function getOneProduct(id){
    const product = products.filter((pd) => pd.id == id)[0] || null
        return product;
}

exports.delete = (id) => {
        product = products.filter((pd) => pd.id != id);
        return product;
}