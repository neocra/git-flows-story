// jest-dom adds custom matchers for asserting on DOM nodes, e.g.
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';

// jsdom implements no SVG layout, but @gitgraph/react measures the rendered
// graph with getBBox() on every update. Without a stub the component throws
// as soon as a commit is drawn.
if (!('getBBox' in SVGElement.prototype)) {
  SVGElement.prototype.getBBox = () =>
    ({ x: 0, y: 0, width: 0, height: 0 }) as DOMRect;
}
