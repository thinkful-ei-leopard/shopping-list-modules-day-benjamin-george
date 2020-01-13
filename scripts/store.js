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
};

const findAndToggleChecked = function (id) {
  let toToggle = findById(id).indexOf();
  if (this.items[toToggle].checked === false) {
    this.items[toToggle].checked = true; 
  } else {
    this.items[toToggle].checked = false;
  }
};

const findAndUpdateName = function(id, newName) {
  try {
    item.validateName(name);
    findById();
    
    ;
  }
  catch (e) {
    console.log( `Cannot update name: ${e.message}`);
  }
};

const findAndD


  
export default {
  items,
  hideCheckedItems
};
