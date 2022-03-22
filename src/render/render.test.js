import { createDOM } from './';

xdescribe('render', () => {
  test('should create a new element and append to the container', () => {
    const container = document.createElement('div');
    const element = {
      type: 'span',
      props: {
        children: [],
      },
    };

    createDOM(element, container);

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

    createDOM(element, container);

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

    createDOM(element, container);

    expect(container.innerHTML).toEqual('<span id="hello"></span>');
  });
});
