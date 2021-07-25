var products=[
    {id: 1, name: "Điện thoại", cost: 2000000, date: "1999-02-17", brand: 0, img: ""},
    {id: 2, name: "Máy tính bảng", cost: 20000000, date: "1999-02-17", brand: 1, img: ""},
    {id: 3, name: "Macbook", cost: 30000000, date: "1999-02-17", brand: 2, img: ""},
    {id: 4, name: "Laptop", cost: 20000000, date: "1999-02-17", brand: 3, img: ""},
];

exports.get = function getAllProducts(){
    return products;
}

exports.getOne = function getOneProduct(id){
    const product = products.filter((pd) => pd.id == id)[0] || null
    return product;
}

exports.delete = (id) => {
    products = products.filter((pd) => pd.id != id);
}

exports.update = (pd) =>{
    products = products.map(item => item.id == pd.id ? 
        {...item,   
                    name: pd.name,
                    cost: pd.cost,
                    date: pd.date,
                    brand: pd.brand,
                    img: pd.img ? pd.img : item.img
        } :item)
}

exports.insert = (pd) =>{
    products.push(pd);
}


