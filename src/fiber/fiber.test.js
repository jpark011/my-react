import './requestIdleCallback.mock.js';
import { jest } from '@jest/globals';
import { render } from '.';

// jest.useFakeTimers();

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('render', () => {
  afterEach(() => {
    // jest.runOnlyPendingTimers();
  });

  test('schedule work concurrently', async () => {
    const container = document.createElement('div');
    const element = {
      type: 'span',
      props: {
        children: [],
      },
    };

    render(element, container);

    await sleep(1000);

    // jest.advanceTimersByTime(1000);

    expect(container.innerHTML).toEqual('<span></span>');
  });
});
