const fetchLukeSkywalker = require('.');

/**
 * The API payload contains links using 'https' instead of expected 'http'
 * I've updated the snapshot to reflect this.
 */
describe('fetchLukeSkywalker', () => {
  it('returns correct information about Luke Skywalker', async () => {
  
    const actualResult = await fetchLukeSkywalker();

    expect(actualResult).toMatchSnapshot();
  });
});
