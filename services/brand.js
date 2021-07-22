var brand = [
    {id: 0, name:"LG"},
    {id: 1, name:"Samsung"},
    {id: 2, name:"APPLE"},
    {id: 3, name:"ASUS"},
]

// select * from brand
exports.get = function(){
    return brand;
}