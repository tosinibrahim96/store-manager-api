import ProductsModel from '../models/Products';

const Product = {
   /**
    * 
    * @param {object} req 
    * @param {object} res
    * @returns {object} product object 
    */
   create(req, res) {
      if (!req.body.name && !req.body.type && !req.body.quantity && !req.body.price) {
         return res.status(400).send({ 'message': 'All fields are required' })
      }
      const product = ProductsModel.create(req.body);
      return res.status(201).send(product);
   },
   /**
    * 
    * @param {object} req 
    * @param {object} res 
    * @returns {object} products array
    */
   getAll(req, res) {
      const products = ProductsModel.findAll();
      return res.status(200).send(products);
   },
   /**
    * 
    * @param {object} req 
    * @param {object} res
    * @returns {object} product object
    */
   getOne(req, res) {
      const product = ProductsModel.findOne(req.params.id);
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
   update(req, res) {
      const product = ProductsModel.findOne(req.params.id);
      if (!product) {
         return res.status(404).send({ 'message': 'product not found' });
      }
      const updatedproduct = ProductsModel.update(req.params.id, req.body)
      return res.status(200).send(updatedproduct);
   },
   /**
    * 
    * @param {object} req 
    * @param {object} res 
    * @returns {void} return statuc code 204 
    */
   delete(req, res) {
      const product = ProductsModel.findOne(req.params.id);
      if (!product) {
         return res.status(404).send({ 'message': 'product not found' });
      }
      const ref = ProductsModel.delete(req.params.id);
      return res.status(204).send(ref);
   }
}

export default Product;