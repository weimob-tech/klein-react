import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from 'klein';

type targetType = Record<string, string>;

const sizeArr = ['large', 'medium', 'small'];
const typeArr = ['primary', 'default', 'link', 'dashed', 'danger', 'ghost'];
const btn = 'klein-btn';

const sizes: targetType = {};
const types: targetType = {};

function createClasses(arr: string[], target: targetType) {
  arr.forEach((v: string) => {
    target[v] = `${btn}-${v}`;
  });
}

createClasses(sizeArr, sizes);
createClasses(typeArr, types);

describe('Button', () => {
  test('default button renders correctly', () => {
    const { getByRole } = render(<Button>Hello World</Button>);
    const button = getByRole('button');

    expect(button).toHaveClass(btn);
    expect(button).toHaveClass(types.default);
    expect(button).toHaveClass(sizes.medium);
    expect(button).toHaveTextContent('Hello World');
  });

  test('primary button renders correctly', () => {
    const { getByRole } = render(<Button type="primary">Hello World</Button>);
    const button = getByRole('button');

    expect(button).toHaveClass(btn);
    expect(button).toHaveClass(types.primary);
    expect(button).toHaveClass(sizes.medium);
  });

  test('dashed button renders correctly', () => {
    const { getByRole } = render(<Button type="dashed">Hello World</Button>);
    const button = getByRole('button');

    expect(button).toHaveClass(btn);
    expect(button).toHaveClass(types.dashed);
    expect(button).toHaveClass(sizes.medium);
  });

  test('link button renders correctly', () => {
    const { getByRole } = render(<Button type="link">Hello World</Button>);
    const link = getByRole('link');
    expect(link).toHaveClass(btn);
    expect(link).toHaveClass(types.link);
    expect(link).toHaveClass(sizes.medium);
  });

  test('large button renders correctly', () => {
    const { getByRole } = render(<Button size="large">Hello World</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass(btn);
    expect(button).toHaveClass(types.default);
    expect(button).toHaveClass(sizes.large);
  });

  test('small button renders correctly', () => {
    const { getByRole } = render(<Button size="small">Hello World</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass(btn);
    expect(button).toHaveClass(types.default);
    expect(button).toHaveClass(sizes.small);
  });

  test('when the href is provided, button should be changed to link', () => {
    const { container } = render(
      <Button target="_blank" href="http://www.weimob.com">
        Hello World
      </Button>,
    );
    const button = container.firstChild;

    expect(button).toHaveProperty('nodeName', 'A');
    expect(button).toHaveAttribute('target', '_blank');
    expect(button).toHaveAttribute('href', 'http://www.weimob.com');
  });

  test('className should be customizable', () => {
    const { getByRole } = render(
      <Button className="customize-class">Hello World</Button>,
    );
    const button = getByRole('button');

    expect(button).toHaveClass('customize-class');
  });

  test('button htmlType', () => {
    {
      const { container } = render(<Button>Hello World</Button>);
      const button = container.firstChild;
      expect(button).toHaveProperty('type', 'button');
    }

    {
      const { container } = render(
        <Button htmlType="submit">Hello World</Button>,
      );
      const button = container.firstChild;
      expect(button).toHaveProperty('type', 'submit');
    }

    {
      const { container } = render(
        <Button htmlType="reset">Hello World</Button>,
      );
      const button = container.firstChild;
      expect(button).toHaveProperty('type', 'reset');
    }
  });

  test('danger button renders correctly', () => {
    const { getByRole } = render(<Button danger>Hello World</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass(`${types.default} ${types.danger}`);
  });

  test('primary&danger button renders correctly', () => {
    const { getByRole } = render(
      <Button type="primary" danger>
        Hello World
      </Button>,
    );
    const button = getByRole('button');
    expect(button).toHaveClass(`${types.primary} ${types.danger}`);
  });

  test('dashed&danger button renders correctly', () => {
    const { getByRole } = render(
      <Button type="dashed" danger>
        Hello World
      </Button>,
    );
    const button = getByRole('button');
    expect(button).toHaveClass(`${types.dashed} ${types.danger}`);
  });

  test('link&danger button renders correctly', () => {
    const { getByRole } = render(
      <Button type="dashed" danger>
        Hello World
      </Button>,
    );
    const button = getByRole('button');
    expect(button).toHaveClass(`${types.dashed} ${types.danger}`);
  });

  test('ghost button renders correctly', () => {
    const { getByRole } = render(<Button ghost>Hello World</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass(`${types.default} ${types.ghost}`);
  });

  test('primary&ghost button renders correctly', () => {
    const { getByRole } = render(
      <Button type="primary" ghost>
        Hello World
      </Button>,
    );
    const button = getByRole('button');
    expect(button).toHaveClass(`${types.primary} ${types.ghost}`);
  });

  test('dashed&ghost button renders correctly', () => {
    const { getByRole } = render(
      <Button type="dashed" ghost>
        Hello World
      </Button>,
    );
    const button = getByRole('button');
    expect(button).toHaveClass(`${types.dashed} ${types.ghost}`);
  });

  test('click', () => {
    let isClicked = false;
    const { getByRole } = render(
      <Button
        onClick={() => {
          isClicked = true;
        }}
      >
        Hello World
      </Button>,
    );
    const button = getByRole('button');
    userEvent.click(button);
    expect(isClicked).toBe(true);
  });

  test('click when button is disabed', () => {
    let isClicked = false;
    const { getByRole } = render(
      <Button
        onClick={() => {
          isClicked = true;
        }}
        disabled
      >
        Hello World
      </Button>,
    );
    const button = getByRole('button');
    userEvent.click(button);
    expect(isClicked).toBe(false);
  });

  // test('ghost button renders correctly', () => {
  //   const { getByRole } = render(<Button ghost>Hello World</Button>);
  //   const button = getByRole('button');
  //   expect(button).toHaveClass(`${types.default} ${types.ghost}`);
  // })
});
