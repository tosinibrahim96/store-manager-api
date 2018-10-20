'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Product = function () {
   /**
    * class constructor
    * @param {object} data
    */
   function Product() {
      _classCallCheck(this, Product);

      this.products = [];
   }
   /**
    * 
    * @returns {object} product object
    */


   _createClass(Product, [{
      key: 'create',
      value: function create(data) {
         var newproduct = {
            id: _uuid2.default.v4(),
            name: data.name,
            type: data.type,
            quantity: data.quantity,
            price: data.price,
            createdDate: _moment2.default.now(),
            modifiedDate: _moment2.default.now()
         };
         this.products.push(newproduct);
         return newproduct;
      }
      /**
       * 
       * @param {uuid} id
       * @returns {object} product object
       */

   }, {
      key: 'findOne',
      value: function findOne(id) {
         return this.products.find(function (product) {
            return product.id === id;
         });
      }
      /**
       * @returns {object} returns all products
       */

   }, {
      key: 'findAll',
      value: function findAll() {
         return this.products;
      }
      /**
       * 
       * @param {uuid} id
       * @param {object} data 
       */

   }, {
      key: 'update',
      value: function update(id, data) {
         var product = this.findOne(id);
         var index = this.products.indexOf(product);
         this.products[index].name = data['name'] || product.name;
         this.products[index].type = data['type'] || product.type;
         this.products[index].quantity = data['quantity'] || product.takeAway;
         this.products[index].price = data['price'] || product.takeAway;
         this.products[index].modifiedDate = _moment2.default.now();
         return this.products[index];
      }
      /**
       * 
       * @param {uuid} id 
       */

   }, {
      key: 'delete',
      value: function _delete(id) {
         var product = this.findOne(id);
         var index = this.products.indexOf(product);
         this.products.splice(index, 1);
         return {};
      }
   }]);

   return Product;
}();

exports.default = new Product();