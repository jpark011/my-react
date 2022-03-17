import { createElement } from './';

describe('createElement', () => {
  it('should create a new element with given type', () => {
    const div = createElement('div');
    const span = createElement('span');

    expect(div.type).toEqual('div');
    expect(span.type).toEqual('span');
    expect(span.props).toEqual({ children: [] });
  });

  it('should create a new element with given props', () => {
    const element = createElement('div', { count: 0 });

    expect(element.props.count).toEqual(0);
  });

  it('should create a new element with primitive children', () => {
    const single = createElement('div', null, 'hello');
    const [text] = single.props.children;
    const multi = createElement('div', null, 'hello', 'world');

    expect(single.props.children).toHaveLength(1);
    expect(text.type).toEqual('TEXT_ELEMENT');
    expect(text.props.nodeValue).toEqual('hello');
    expect(multi.props.children).toHaveLength(2);
  });

  it('should create a new element with given children', () => {
    const single = createElement('div', null, 'hello');
    const multi = createElement('div', null, 'hello', 'world');

    expect(single.props.children).toHaveLength(1);
    expect(multi.props.children).toHaveLength(2);
  });
});
