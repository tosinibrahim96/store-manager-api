import moment from 'moment';
import uuid from 'uuid';

class Sales {
   /**
    * class constructor
    * @param {object} data
    */
   constructor() {
      this.sales = [];
   }
   /**
    * 
    * @returns {object} sale object
    */
   create(data) {
      const newsale = {
         id: uuid.v4(),
         customer_name: data.customer_name,
         attendant_name: data.attendant_name,
         product_name: data.product_name,
         product_type: data.product_type,
         quantity: data.quantity,
         price: data.price,
         createdDate: moment.now(),
         modifiedDate: moment.now()
      };
      this.sales.push(newsale);
      return newsale
   }
   /**
    * 
    * @param {uuid} id
    * @returns {object} sales object
    */
   findOne(id) {
      return this.sales.find(sale => sale.id === id);
   }
   /**
    * @returns {object} returns all sales
    */
   findAll() {
      return this.sales;
   }
   /**
    * 
    * @param {uuid} id
    * @param {object} data 
    */
   update(id, data) {
      const sale = this.findOne(id);
      const index = this.sales.indexOf(sale);
      this.sales[index].customer_name = data['customer_name'] || sale.customer_name;
      this.sales[index].attendant_name = data['attendant_name'] || sale.attendant_name;
      this.sales[index].product_name = data['product_name'] || product.product_name;
      this.sales[index].product_type = data['product_type'] || product.product_type;
      this.sales[index].quantity = data['quantity'] || product.quantity;
      this.sales[index].price = data['price'] || product.price;
      this.sales[index].modifiedDate = moment.now()
      return this.sales[index];
   }
   /**
    * 
    * @param {uuid} id 
    */
   delete(id) {
      const sale = this.findOne(id);
      const index = this.sales.indexOf(sale);
      this.sales.splice(index, 1);
      return {};
   }
}
export default new Sales();