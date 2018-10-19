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

var Sales = function () {
   /**
    * class constructor
    * @param {object} data
    */
   function Sales() {
      _classCallCheck(this, Sales);

      this.sales = [];
   }
   /**
    * 
    * @returns {object} sale object
    */


   _createClass(Sales, [{
      key: 'create',
      value: function create(data) {
         var newsale = {
            id: _uuid2.default.v4(),
            customer_name: data.customer_name,
            attendant_name: data.attendant_name,
            product_name: data.product_name,
            product_type: data.product_type,
            quantity: data.quantity,
            price: data.price,
            createdDate: _moment2.default.now(),
            modifiedDate: _moment2.default.now()
         };
         this.sales.push(newsale);
         return newsale;
      }
      /**
       * 
       * @param {uuid} id
       * @returns {object} sales object
       */

   }, {
      key: 'findOne',
      value: function findOne(id) {
         return this.sales.find(function (sale) {
            return sale.id === id;
         });
      }
      /**
       * @returns {object} returns all sales
       */

   }, {
      key: 'findAll',
      value: function findAll() {
         return this.sales;
      }
      /**
       * 
       * @param {uuid} id
       * @param {object} data 
       */

   }, {
      key: 'update',
      value: function update(id, data) {
         var sale = this.findOne(id);
         var index = this.sales.indexOf(sale);
         this.sales[index].customer_name = data['customer_name'] || sale.customer_name;
         this.sales[index].attendant_name = data['attendant_name'] || sale.attendant_name;
         this.sales[index].product_name = data['product_name'] || product.product_name;
         this.sales[index].product_type = data['product_type'] || product.product_type;
         this.sales[index].quantity = data['quantity'] || product.quantity;
         this.sales[index].price = data['price'] || product.price;
         this.sales[index].modifiedDate = _moment2.default.now();
         return this.sales[index];
      }
      /**
       * 
       * @param {uuid} id 
       */

   }, {
      key: 'delete',
      value: function _delete(id) {
         var sale = this.findOne(id);
         var index = this.sales.indexOf(sale);
         this.sales.splice(index, 1);
         return {};
      }
   }]);

   return Sales;
}();

exports.default = new Sales();