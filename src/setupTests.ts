// jest-dom adds custom matchers for asserting on DOM nodes, e.g.
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';

// jsdom implements no SVG layout, but @gitgraph/react measures the rendered
// graph with getBBox() on every update. Without a stub the component throws
// as soon as a commit is drawn. The DOM lib declares getBBox() on
// SVGGraphicsElement, while jsdom leaves it off SVGElement entirely, hence
// the cast.
const svgPrototype = SVGElement.prototype as unknown as {
  getBBox?: () => DOMRect;
};

if (!svgPrototype.getBBox) {
  svgPrototype.getBBox = () => new DOMRect(0, 0, 0, 0);
}
