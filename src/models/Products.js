import moment from 'moment';
import uuid from 'uuid';

class Product {
   /**
    * class constructor
    * @param {object} data
    */
   constructor() {
      this.products = [];
   }
   /**
    * 
    * @returns {object} product object
    */
   create(data) {
      const newproduct = {
         id: uuid.v4(),
         name: data.name,
         type: data.type,
         quantity: data.quantity,
         price: data.price,
         createdDate: moment.now(),
         modifiedDate: moment.now()
      };
      this.products.push(newproduct);
      return newproduct
   }
   /**
    * 
    * @param {uuid} id
    * @returns {object} product object
    */
   findOne(id) {
      return this.products.find(product => product.id === id);
   }
   /**
    * @returns {object} returns all products
    */
   findAll() {
      return this.products;
   }
   /**
    * 
    * @param {uuid} id
    * @param {object} data 
    */
   update(id, data) {
      const product = this.findOne(id);
      const index = this.products.indexOf(product);
      this.products[index].name = data['name'] || product.name;
      this.products[index].type = data['type'] || product.type;
      this.products[index].quantity = data['quantity'] || product.quantity;
      this.products[index].price = data['price'] || product.price;
      this.products[index].modifiedDate = moment.now()
      return this.products[index];
   }
   /**
    * 
    * @param {uuid} id 
    */
   delete(id) {
      const product = this.findOne(id);
      const index = this.products.indexOf(product);
      this.products.splice(index, 1);
      return {};
   }
}
export default new Product();