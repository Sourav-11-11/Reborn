const ExpressError = require('../utils/ExpressError.js');

describe('ExpressError Utility', () => {
  test('should create an error with message and status code', () => {
    const error = new ExpressError('Not found', 404);
    
    expect(error.message).toBe('Not found');
    expect(error.statusCode).toBe(404);
  });

  test('should handle server errors', () => {
    const error = new ExpressError('Internal server error', 500);
    
    expect(error.message).toBe('Internal server error');
    expect(error.statusCode).toBe(500);
  });

  test('should handle validation errors', () => {
    const error = new ExpressError('Invalid input', 400);
    
    expect(error.message).toBe('Invalid input');
    expect(error.statusCode).toBe(400);
  });

  test('should have instanceof Error', () => {
    const error = new ExpressError('Test error', 400);
    expect(error instanceof Error).toBe(true);
  });
});
