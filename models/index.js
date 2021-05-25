// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {foreignKey: 'category_id'});

Category.hasMany(Product, {foreignKey: 'category_id'});

Product.belongsToMany(Tag, {foreignKey: 'product_tag_id'}); 
// (through ProductTag)

Tag,belongsToMany(Product, {foreignKey: 'product_tag_id'});
// (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
