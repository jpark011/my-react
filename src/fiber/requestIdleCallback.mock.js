import { jest } from '@jest/globals';

window.requestIdleCallback = jest.fn().mockImplementation((callback) => {
  console.count('requestIdleCallback');
  setTimeout(() => {
    console.count('timeout');
    callback({ timeRemaining: () => Math.random() * 5 });
  }, Math.random() * 1000);
});
