import { render } from './';

describe('render', () => {
  test('should create a new element and append to the container', () => {
    const container = document.createElement('div');
    const element = {
      type: 'span',
      props: {
        children: [],
      },
    };

    render(element, container);

    expect(container.innerHTML).toEqual('<span></span>');
  });

  test('should create element recursively', () => {
    const container = document.createElement('div');
    const child = {
      type: 'span',
      props: {
        children: [],
      },
    };
    const element = {
      type: 'span',
      props: {
        children: [child],
      },
    };

    render(element, container);

    expect(container.innerHTML).toEqual('<span><span></span></span>');
  });

  test('should assign props to dom', () => {
    const container = document.createElement('div');
    const element = {
      type: 'span',
      props: {
        children: [],
        id: 'hello',
      },
    };

    render(element, container);

    expect(container.innerHTML).toEqual('<span id="hello"></span>');
  });
});
