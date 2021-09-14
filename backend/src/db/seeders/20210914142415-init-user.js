module.exports = {
  up: async queryInterface => queryInterface.bulkInsert('Users', [{
    firstName: 'Anna',
    lastName: 'Arendelle',
    email: 'admin@example.com',
    password: '$2b$08$9AZ4B.R8xQ4anEpaLU7W8OXupzTH.2915zMcSSvt5mFi4z/7Ae2g2', // 123456
    roleId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }]),

  down: async queryInterface => queryInterface.bulkDelete('Users', null, {})
};
