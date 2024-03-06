const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Adriano H Ferreira',
    email: 'adrianoferreira31@gmail.com',
    phone: '123456789',
    category_id: v4(),
  },

  {
    id: v4(),
    name: 'Barbara Vitória de Almeida',
    email: 'barbara_vitoria@gmail.com',
    phone: '123456789',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }
}

module.exports = new ContactsRepository();
