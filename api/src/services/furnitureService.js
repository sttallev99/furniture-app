const Furniture = require('../models/Furniture');

exports.create = (furnitureData) => Furniture.create(furnitureData);
exports.getAll = () => Furniture.find();
exports.getOne = (id) => Furniture.findById(id);
exports.updateFurniture = (id, furnitureData) => Furniture.findByIdAndUpdate(id, furnitureData);
exports.deleteFurniture = (id) => Furniture.findByIdAndDelete(id);