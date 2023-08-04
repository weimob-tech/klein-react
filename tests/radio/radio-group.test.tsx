import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { Radio } from 'klein';

describe('Radio.Group', () => {
  test('render correct', () => {
    const { container, rerender } = render(
      <Radio.Group
        options={[
          { label: 'A', value: 1 },
          { label: 'B', value: 2 },
        ]}
        buttonStyle="solid"
      />,
    );

    const $radio = container.firstChild as HTMLElement;
    expect($radio).toBeInTheDocument();
    expect($radio).toHaveClass('klein-radio-group', 'klein-radio-group-solid');
    expect($radio.childNodes?.length).toBe(2);
    expect($radio.childNodes?.[0]).toHaveTextContent('A');
    expect($radio.childNodes?.[1]).toHaveTextContent('B');

    // option is string
    rerender(<Radio.Group options={['C', 'D', 'E']} />);
    expect($radio.childNodes?.length).toBe(3);
    expect($radio.childNodes?.[0]).toHaveTextContent('C');
    expect($radio.childNodes?.[1]).toHaveTextContent('D');
    expect($radio.childNodes?.[2]).toHaveTextContent('E');
  });
  test('render button', () => {
    const { container } = render(
      <Radio.Group defaultValue="a">
        <Radio.Button value="a">A</Radio.Button>
        <Radio.Button value="b">B</Radio.Button>
      </Radio.Group>,
    );

    const $radio = container.firstChild as HTMLElement;
    expect($radio).toBeInTheDocument();
    expect($radio).toHaveClass(
      'klein-radio-group',
      'klein-radio-group-outline',
    );
    expect($radio.childNodes?.length).toBe(2);
    expect($radio.childNodes?.[0]).toHaveClass(
      'klein-radio-button-wrapper',
      'klein-radio-button-wrapper-checked',
    );
    expect($radio.childNodes?.[0]).toHaveTextContent('A');
    expect($radio.childNodes?.[1]).toHaveTextContent('B');
  });
  test('onChange', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Radio.Group
        options={[
          { label: 'A', value: 1 },
          { label: 'B', value: 2 },
        ]}
        buttonStyle="solid"
        onChange={onChange}
      />,
    );

    const $input = container.querySelector('.klein-radio-input') as HTMLElement;
    expect($input).toBeInTheDocument();

    fireEvent.click($input);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
