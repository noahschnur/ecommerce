// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {foreignKey: 'category_id'});
// add cascade on delete?

Category.hasMany(Product, {foreignKey: 'category_id'});

Product.belongsToMany(Tag, {foreignKey: 'product_tag_id'}); 
// add cascade on delete?

Tag.belongsToMany(Product, {foreignKey: 'product_tag_id'});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
