exports.getCatObject = function (cat) {
    let cat_obj = {};
    let weight = {};

    weight.imperial = cat.imperial;
    weight.metric = cat.metric;

    cat_obj.catId = cat.catId;
    cat_obj.name = cat.name;
    cat_obj.weight = weight;
    cat_obj.breed = cat.breed;

    return cat_obj;
}


exports.sortCatsByName = function (a, b) {
    if (a.name < b.name){
        return -1;
    }
    if (a.name > b.name){
        return 1;
    }
    return 0;
}
