module.exports = {
  up: async queryInterface => queryInterface.bulkInsert('Roles', [{
    id: 1,
    name: 'admin',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 2,
    name: 'user',
    createdAt: new Date(),
    updatedAt: new Date()
  }]),

  down: async queryInterface => queryInterface.bulkDelete('Roles', null, {})
};
