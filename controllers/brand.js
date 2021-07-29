var brandService = require('../services/brand');

exports.get = async () => {
    return await brandService.get();
}