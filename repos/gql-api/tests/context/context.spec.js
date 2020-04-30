import { initializeContext } from '../../src/context';

describe('initializeContext integration tests', () => {
  test('initializeContext should return frozen context object', async () => {
    const options = undefined;
    const result = await initializeContext(options);

    expect(Object.isFrozen(result)).toBe(true);
  });

  test('initializeContext should return sealed context object', async () => {
    const options = undefined;
    const result = await initializeContext(options);

    expect(Object.isSealed(result)).toBe(true);
  });
});
