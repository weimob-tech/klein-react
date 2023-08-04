import '@testing-library/jest-dom/extend-expect';

if (typeof window !== 'undefined') {
  if (!window.matchMedia) {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: query.includes('max-width'),
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  }
}

// const Enzyme = require('enzyme');

// const Adapter = require('enzyme-adapter-react-16');

// Enzyme.configure({ adapter: new Adapter() });
