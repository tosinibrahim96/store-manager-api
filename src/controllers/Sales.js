import salesModel from '../models/Sales';

const Sale = {
   /**
    * 
    * @param {object} req 
    * @param {object} res
    * @returns {object} sale object 
    */
   create(req, res) {
      if (!req.body.customer_name && !req.body.attendant_name && !req.body.product_name
         && !req.body.product_type && !req.body.quantity && !req.body.price) {
         return res.status(400).send({ 'message': 'All fields are required' })
      }
      const sale = salesModel.create(req.body);
      return res.status(201).send(sale);
   },
   /**
    * 
    * @param {object} req 
    * @param {object} res 
    * @returns {object} sales array
    */
   getAll(req, res) {
      const sales = salesModel.findAll();
      return res.status(200).send(sales);
   },
   /**
    * 
    * @param {object} req 
    * @param {object} res
    * @returns {object} sale object
    */
   getOne(req, res) {
      const sale = salesModel.findOne(req.params.id);
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
   update(req, res) {
      const sale = salesModel.findOne(req.params.id);
      if (!sale) {
         return res.status(404).send({ 'message': 'sale not found' });
      }
      const updatedsale = salesModel.update(req.params.id, req.body)
      return res.status(200).send(updatedsale);
   },
   /**
    * 
    * @param {object} req 
    * @param {object} res 
    * @returns {void} return statuc code 204 
    */
   delete(req, res) {
      const sale = salesModel.findOne(req.params.id);
      if (!sale) {
         return res.status(404).send({ 'message': 'sale not found' });
      }
      const ref = salesModel.delete(req.params.id);
      return res.status(204).send(ref);
   }
}

export default Sale;