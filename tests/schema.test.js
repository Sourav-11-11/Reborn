const { listingSchema, userSchema } = require('../schema.js');

describe('Schema Validation Tests', () => {
  
  describe('Product Listing Schema', () => {
    test('should validate a correct product listing', () => {
      const validProduct = {
        product: {
          productName: 'Winter Jacket',
          category: 'Clothing',
          condition: 'Like New',
          description: 'A warm winter jacket',
          price: 1500,
          contactNumber: '9876543210',
          image: 'https://example.com/image.jpg'
        }
      };

      const { error } = listingSchema.validate(validProduct);
      expect(error).toBeUndefined();
    });

    test('should reject product with missing required fields', () => {
      const invalidProduct = {
        product: {
          productName: 'Winter Jacket',
          // Missing category
          condition: 'Like New'
        }
      };

      const { error } = listingSchema.validate(invalidProduct);
      expect(error).toBeDefined();
    });

    test('should reject product with price over max limit', () => {
      const invalidProduct = {
        product: {
          productName: 'Winter Jacket',
          category: 'Clothing',
          condition: 'Like New',
          description: 'A warm winter jacket',
          price: 200000, // Over 100000 limit
        }
      };

      const { error } = listingSchema.validate(invalidProduct);
      expect(error).toBeDefined();
    });

    test('should reject product with invalid category', () => {
      const invalidProduct = {
        product: {
          productName: 'Winter Jacket',
          category: 'InvalidCategory',
          condition: 'Like New',
          description: 'A warm winter jacket',
          price: 1500
        }
      };

      const { error } = listingSchema.validate(invalidProduct);
      expect(error).toBeDefined();
    });

    test('should reject invalid contact number format', () => {
      const invalidProduct = {
        product: {
          productName: 'Winter Jacket',
          category: 'Clothing',
          condition: 'Like New',
          description: 'A warm winter jacket',
          price: 1500,
          contactNumber: '12345' // Invalid format
        }
      };

      const { error } = listingSchema.validate(invalidProduct);
      expect(error).toBeDefined();
    });
  });

  describe('User Schema', () => {
    test('should validate a correct user signup', () => {
      const validUser = {
        username: 'johndoe123',
        email: 'john@example.com',
        password: 'SecurePass123!'
      };

      const { error } = userSchema.validate(validUser);
      expect(error).toBeUndefined();
    });

    test('should reject password without uppercase letter', () => {
      const invalidUser = {
        username: 'johndoe123',
        email: 'john@example.com',
        password: 'securepass123!'
      };

      const { error } = userSchema.validate(invalidUser);
      expect(error).toBeDefined();
      expect(error.details[0].message).toContain('uppercase');
    });

    test('should reject password without digit', () => {
      const invalidUser = {
        username: 'johndoe123',
        email: 'john@example.com',
        password: 'SecurePass!'
      };

      const { error } = userSchema.validate(invalidUser);
      expect(error).toBeDefined();
      expect(error.details[0].message).toContain('digit');
    });

    test('should reject password without special character', () => {
      const invalidUser = {
        username: 'johndoe123',
        email: 'john@example.com',
        password: 'SecurePass123'
      };

      const { error } = userSchema.validate(invalidUser);
      expect(error).toBeDefined();
      expect(error.details[0].message).toContain('special character');
    });

    test('should reject password shorter than 8 characters', () => {
      const invalidUser = {
        username: 'johndoe123',
        email: 'john@example.com',
        password: 'Pass1!'
      };

      const { error } = userSchema.validate(invalidUser);
      expect(error).toBeDefined();
      expect(error.details[0].message).toContain('8 characters');
    });

    test('should reject invalid email format', () => {
      const invalidUser = {
        username: 'johndoe123',
        email: 'invalid-email',
        password: 'SecurePass123!'
      };

      const { error } = userSchema.validate(invalidUser);
      expect(error).toBeDefined();
    });

    test('should reject username shorter than 3 characters', () => {
      const invalidUser = {
        username: 'jo',
        email: 'john@example.com',
        password: 'SecurePass123!'
      };

      const { error } = userSchema.validate(invalidUser);
      expect(error).toBeDefined();
    });
  });
});
