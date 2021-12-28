import { render } from '@testing-library/react';

import App from './app';

jest.mock('../hooks/workers', () => ({
  useWorker: () => {
    return {
      services: jest.fn(),
    };
  },
}));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Welcome frontend/gi)).toBeTruthy();
  });
});
