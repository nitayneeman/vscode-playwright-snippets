const snippets = require('./snippets.json');

describe('Snippets', () => {
  const keys = Object.keys(snippets);

  it('should not be empty', () => {
    expect(keys.length).toBeGreaterThan(0);
  });

  describe.each(keys)('%s', (key) => {
    it('should have a prefix', () => {
      const { prefix } = snippets[key];

      expect(prefix).toBeDefined();
      expect(prefix.length).toBeGreaterThan(0);
      expect(prefix.startsWith('pw-')).toBe(true);
    });

    it('should have a body', () => {
      const { body } = snippets[key];

      expect(body).toBeDefined();
      expect(body.length).toBeGreaterThan(0);
    });

    it('should have a description', () => {
      const { description } = snippets[key];

      expect(description).toBeDefined();
      expect(description.length).toBeGreaterThan(0);
    });
  });
});
