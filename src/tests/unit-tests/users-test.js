const { signupController, loginController } = require('../../controllers/auth/auth-controller');
const { usersServicesMockInstance } = require('../../services/auth/auth-service.mock');
const bodyValidation = require('../../utils/validations/index');

jest.mock('../../services/auth/auth-service.mock');

describe('User API Unit Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new user', async () => {
    const mockUser = {
      _id: 'user_id',
      name: 'John Doe',
      email: 'john@example.com',
    };
    usersServicesMockInstance.signUpUser(mockUser);

    const req = { body: { name: 'John Doe', email: 'john@example.com', password: 'securepassword' } };
    const res = { send: jest.fn() };

    await signupController(req, res);

    expect(bodyValidation).toHaveBeenCalledWith('userSignup', req.body);
    expect(usersServicesMockInstance.signUpUser).toHaveBeenCalledWith(req.body);
    expect(res.send).toHaveBeenCalledWith(mockUser);
  });

  it('should login an existing user', async () => {
    const mockResponse = {
      user: {
        _id: 'user_id',
        name: 'John Doe',
        email: 'john@example.com',
      },
      token: 'mockToken',
    };
    usersServicesMockInstance.loginUser(mockResponse);

    const req = { body: { email: 'john@example.com', password: 'securepassword' } };
    const res = { send: jest.fn() };

    await loginController(req, res);

    expect(bodyValidation).toHaveBeenCalledWith('userLogin', req.body);
    expect(usersServicesMockInstance.loginUser).toHaveBeenCalledWith(req.body);
    expect(res.send).toHaveBeenCalledWith(mockResponse);
  });
});
