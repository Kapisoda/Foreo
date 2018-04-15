import Vue from 'vue'

var filterContacts = {
  foo(contacts, search) {
    let result = contacts;
    return result = contacts.filter(function(contact) {
      let fullname = contact.name + ' ' + contact.surname + ' ' + contact.phoneNumber;
        return fullname.toLowerCase().indexOf(search.toLowerCase()) >= 0;
    });
  }
}

export default filterContacts
