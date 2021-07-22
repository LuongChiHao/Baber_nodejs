var brandService = require('../services/brand');

exports.get = () => {
    return brandService.get();
}