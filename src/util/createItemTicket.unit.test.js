import createItemTicket from './createItemTicket';

describe('createItemTicket function unit tests: ', () => {
  const ticket = createItemTicket();
  test('Creates an object with key and date properties', () => {
    expect(ticket).toMatchObject({
      key: expect.any(String),
      date: expect.any(Number),
    });
  });
});
