// speer_task/src/tests/integration-tests/user-integration.test.js
const request = require('supertest');
const app = require('../../server');
const { usersServicesMockInstance } = require('../../services/auth/auth-service.mock');

jest.mock('../../services/auth/auth-service.mock')

describe('User API Integration Tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create a new user', async () => {
        const mockUser = {
            _id: 'user_id',
            name: 'John Doe',
            email: 'john@example.com',
        };
        usersServicesMockInstance.signUpUser.mockResolvedValueOnce(mockUser);

        const response = await request(app)
            .post('/auth/signup')
            .send({ name: 'John Doe', email: 'john@example.com', password: 'securepassword' });

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockUser);
        expect(usersServicesMockInstance.signUpUser).toHaveBeenCalled();
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
        usersServicesMockInstance.loginUser.mockResolvedValueOnce(mockResponse);

        const response = await request(app)
            .post('/auth/login')
            .send({ email: 'john@example.com', password: 'securepassword' });

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockResponse);
        expect(usersServicesMockInstance.loginUser).toHaveBeenCalled();
    });
});