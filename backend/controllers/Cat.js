'use strict';
let utils = require('../utils/writer.js');
let Cat = require('../services/CatService');


module.exports.addCat = function addCat(req, res, next) {
    let cat = req.swagger.params['cat'].value;
    Cat.addCat(cat)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getCatById = function getCatById(req, res, next) {
    let catId = req.swagger.params['catId'].value;
    Cat.getCatById(catId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};


module.exports.getCats = function paginationCats(req, res, next) {
    let pageNumber = req.swagger.params['page'].value;
    Cat.paginationCats(pageNumber)
        .then(function (response) {
            console.log(response);
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};


module.exports.updateCat = function updateCat(req, res, next) {
    let catId = req.swagger.params['catId'].value;
    let catInfo = req.swagger.params['catInfo'].value;
    Cat.updateCat(catId, catInfo)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};


module.exports.deleteCat = function deleteCat(req, res, next) {
    let catId = req.swagger.params['catId'].value;
    Cat.deleteCat(catId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
