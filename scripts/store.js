import item from './item.js';

const items = [];
let hideCheckedItems = false;

const findById = function (id) {
  return items.find(items => items.id === id);
};

const addItem = function (name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  }
  catch (e) {
    console.log( `Cannot add item: ${e.message}`);
  }
};

const findAndToggleChecked = function (id) {
  const index = this.items.indexOf(findById(id));
  if (this.items[index].checked === false) {
    this.items[index].checked = true; 
  } else {
    this.items[index].checked = false;
  }
};

const findAndUpdateName = function(id, newName) {
  try {
    item.validateName(newName);
    const index = this.items.indexOf(findById(id));
    this.items[index].name = newName;
  }
  catch (e) {
    console.log( `Cannot update name: ${e.message}`);
  }
};

const findAndDelete = function (id) {
  const index = this.items.indexOf(findById(id));
  this.items.splice(index, 1);
};

const toggleCheckedFilter = function() {
  this.hideCheckedItems = !this.hideCheckedItems;
};

  
export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
