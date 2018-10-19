'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _Sales = require('../models/Sales');

var _Sales2 = _interopRequireDefault(_Sales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sale = {
   /**
    * 
    * @param {object} req 
    * @param {object} res
    * @returns {object} sale object 
    */
   create: function create(req, res) {
      if (!req.body.customer_name && !req.body.attendant_name && !req.body.product_name && !req.body.product_type && !req.body.quantity && !req.body.price) {
         return res.status(400).send({ 'message': 'All fields are required' });
      }
      var sale = _Sales2.default.create(req.body);
      return res.status(201).send(sale);
   },

   /**
    * 
    * @param {object} req 
    * @param {object} res 
    * @returns {object} sales array
    */
   getAll: function getAll(req, res) {
      var sales = _Sales2.default.findAll();
      return res.status(200).send(sales);
   },

   /**
    * 
    * @param {object} req 
    * @param {object} res
    * @returns {object} sale object
    */
   getOne: function getOne(req, res) {
      var sale = _Sales2.default.findOne(req.params.id);
      if (!sale) {
         return res.status(404).send({ 'message': 'sale not found' });
      }
      return res.status(200).send(sale);
   },

   /**
    * 
    * @param {object} req 
    * @param {object} res 
    * @returns {object} updated sale
    */
   update: function update(req, res) {
      var sale = _Sales2.default.findOne(req.params.id);
      if (!sale) {
         return res.status(404).send({ 'message': 'sale not found' });
      }
      var updatedsale = _Sales2.default.update(req.params.id, req.body);
      return res.status(200).send(updatedsale);
   },

   /**
    * 
    * @param {object} req 
    * @param {object} res 
    * @returns {void} return statuc code 204 
    */
   delete: function _delete(req, res) {
      var sale = _Sales2.default.findOne(req.params.id);
      if (!sale) {
         return res.status(404).send({ 'message': 'sale not found' });
      }
      var ref = _Sales2.default.delete(req.params.id);
      return res.status(204).send(ref);
   }
};

exports.default = Sale;