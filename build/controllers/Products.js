'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _Products = require('../models/Products');

var _Products2 = _interopRequireDefault(_Products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Product = {
   /**
    * 
    * @param {object} req 
    * @param {object} res
    * @returns {object} product object 
    */
   create: function create(req, res) {
      if (!req.body.name && !req.body.type && !req.body.quantity && !req.body.price) {
         return res.status(400).send({ 'message': 'All fields are required' });
      }
      var product = _Products2.default.create(req.body);
      return res.status(201).send(product);
   },

   /**
    * 
    * @param {object} req 
    * @param {object} res 
    * @returns {object} products array
    */
   getAll: function getAll(req, res) {
      var products = _Products2.default.findAll();
      return res.status(200).send(products);
   },

   /**
    * 
    * @param {object} req 
    * @param {object} res
    * @returns {object} product object
    */
   getOne: function getOne(req, res) {
      var product = _Products2.default.findOne(req.params.id);
      if (!product) {
         return res.status(404).send({ 'message': 'product not found' });
      }
      return res.status(200).send(product);
   },

   /**
    * 
    * @param {object} req 
    * @param {object} res 
    * @returns {object} updated product
    */
   update: function update(req, res) {
      var product = _Products2.default.findOne(req.params.id);
      if (!product) {
         return res.status(404).send({ 'message': 'product not found' });
      }
      var updatedproduct = _Products2.default.update(req.params.id, req.body);
      return res.status(200).send(updatedproduct);
   },

   /**
    * 
    * @param {object} req 
    * @param {object} res 
    * @returns {void} return statuc code 204 
    */
   delete: function _delete(req, res) {
      var product = _Products2.default.findOne(req.params.id);
      if (!product) {
         return res.status(404).send({ 'message': 'product not found' });
      }
      var ref = _Products2.default.delete(req.params.id);
      return res.status(204).send(ref);
   }
};

exports.default = Product;