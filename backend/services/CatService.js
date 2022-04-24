'use strict';
const { db } = require('../index');
const helpers = require('../utils/helpers');


/**
 * Add a cat to the list
 *
 * cat Cat Cat's information
 * returns Cat
 **/
exports.addCat = function (cat) {
    return new Promise(function (resolve, reject) {
        let insertQuery = `INSERT INTO Cats (name, imperial, metric, breed) VALUES ('${cat.name}', '${cat.weight.imperial}', '${cat.weight.metric}', '${cat.breed}');`
        db.query(insertQuery, (err, results) => {
            if (err) throw err;
            if (results.length === 0) reject([])
            else resolve(cat);
            console.log("1 record inserted");
        })
    });
}


/**
 * Find a cat by its ID
 * IDs must be positive integers
 *
 * catId Long ID of the cat that needs to be fetched
 * returns Cat
 **/
exports.getCatById = function (catId) {
    return new Promise(function (resolve, reject) {
        let selectQuery = `SELECT *  FROM Cats  WHERE Cats.catId = ${catId}`;
        db.query(selectQuery, (err, results) => {
            const cat = results.map(result => getCatObject(result));
            if (err) throw err;
            if (results.length === 0) reject(`No cat with id: ${catId} found!`)
            else resolve(cat);
        })
    })
}


/**
* Get a list of all cats. Empty array if no cats are found.
*
* returns ArrayOfCats
**/
exports.paginationCats = function (pageNumber) {
    return new Promise(function (resolve, reject) {
        const limit = 5;
        const offset = (pageNumber - 1) * limit;
        let selectPaginationQuery = `SELECT * FROM Cats LIMIT ${limit} OFFSET ${offset}`;
        db.query(selectPaginationQuery, (err, results) => {
            console.log(results);
            const cats = results.map(result => helpers.getCatObject(result));
            const sortedCats = cats.sort(helpers.sortCatsByName)
            let totalCatsPerPage = {
                "cats_per_page": cats.length,
                "page_number": pageNumber,
                "total_cats": sortedCats
            }
            if (err) throw err;
            if (results.length === 0) reject([])
            else resolve(totalCatsPerPage);
        })
    })
}


/**
* Update a cat by its ID
* IDs must be positive integers
*
* returns response msg
**/
exports.updateCat = function (catId, catInfo) {
    return new Promise(function (resolve, reject) {
        let updateCatQuery = `UPDATE Cats SET name = '${catInfo.name}', imperial = '${catInfo.weight.imperial}', metric = '${catInfo.weight.metric}', breed = '${catInfo.breed}' 
        WHERE catId = ${catId}`;
        db.query(updateCatQuery, (err, results) => {
            if (err) throw err;
            if (results.length === 0) reject([])
            else resolve(results);
            console.log("1 record updated");
        });
    });
};


/**
* Delete a cat by its ID
* IDs must be positive integers
*
* returns response msg
**/
exports.deleteCat = function (catId) {
    return new Promise(function (resolve, reject) {
        let deleteCatQuery = `DELETE FROM Cats WHERE catId = ${catId}`;
        db.query(deleteCatQuery, (err, results) => {
            if (err) throw err;
            if (results.length === 0) reject([])
            else resolve(results);
            console.log("1 record deleted");
        })
    })
}
