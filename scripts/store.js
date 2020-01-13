import item from './item.js';

const items = [];
let hideCheckedItems = false;

const findById = function (id) {
  return this.items.find(items => items.id === id).name;
};

const addItem = function (name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  }
  catch (e) {
    console.log( `Cannot add item: ${e.message}`);
  }
}


  
export default {
  items,
  hideCheckedItems
};
