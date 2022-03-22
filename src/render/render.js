export function createDOM(fiber) {
  const dom =
    fiber.type === 'TEXT_ELEMENT'
      ? document.createTextNode(fiber.props.nodeValue)
      : document.createElement(fiber.type);
  const isProperty = (key) => key !== 'children' && key !== 'nodeValue';

  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = fiber.props[name];
    });

  return dom;
}
