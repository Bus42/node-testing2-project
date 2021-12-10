
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        // id, name, and password
        { id: 1, name: 'Zaphod', password: 'Beeblebrox' },
        { id: 2, name: 'Humma', password: 'Kavula' },
        { id: 3, name: 'Ford', password: 'Prefect' },
        { id: 4, name: 'Arthur', password: 'Dent' },
        { id: 5, name: 'Trillian', password: 'Marvin' },
        { id: 7, name: 'Slartibartfast', password: 'SmartyPants' },

      ]);
    });
};
