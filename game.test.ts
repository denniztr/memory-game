const { it, expect } = require("@jest/globals");
const { getPairs } = require('./utils')



    it('returns correct number of pairs', () => {
      const count = 5;
      const pairs = getPairs(count);
      const expectedLength = count * 2;
  
      expect(pairs).toHaveLength(expectedLength);
    });
  
    it('each pair contains the same cards', () => {
      const count = 3;
      const pairs = getPairs(count);
  
      for (let i = 0; i < pairs.length; i += 2) {
        expect(pairs[i]).toEqual(pairs[i + 1]);
      }
    });
  
