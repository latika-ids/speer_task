// src/services/auth/auth-service.mock.js
const sinon = require('sinon');

class UsersServicesMock {
  async signUpUser() {
    return Promise.resolve({
      _id: 'mocked_user_id',
      name: 'Mocked User',
      email: 'mocked@example.com',
    });
  }

  async loginUser() {
    return Promise.resolve({
      user: { _id: 'mocked_user_id', name: 'Mocked User', email: 'mocked@example.com' },
      token: 'mockedToken',
    });
  }
}

const usersServicesMockInstance = new UsersServicesMock();

module.exports = {
  usersServicesMockInstance,
};