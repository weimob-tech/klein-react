import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { Checkbox } from 'klein';

describe('Checkbox.Group', () => {
  test('render correct', () => {
    const { container, rerender } = render(
      <Checkbox.Group
        options={[
          { label: 'A', value: 1 },
          { label: 'B', value: 2 },
        ]}
      />,
    );

    const $checkbox = container.firstChild as HTMLElement;
    expect($checkbox).toBeInTheDocument();
    expect($checkbox).toHaveClass('klein-checkbox-group');
    expect($checkbox.childNodes?.length).toBe(2);
    expect($checkbox.childNodes?.[0]).toHaveTextContent('A');
    expect($checkbox.childNodes?.[1]).toHaveTextContent('B');

    // option is string
    rerender(<Checkbox.Group options={['C', 'D', 'E']} />);
    expect($checkbox.childNodes?.length).toBe(3);
    expect($checkbox.childNodes?.[0]).toHaveTextContent('C');
    expect($checkbox.childNodes?.[1]).toHaveTextContent('D');
    expect($checkbox.childNodes?.[2]).toHaveTextContent('E');
  });
  test('controled checked', () => {
    const { container, rerender } = render(
      <Checkbox.Group
        value={[1]}
        options={[
          { label: 'A', value: 1 },
          { label: 'B', value: 2 },
        ]}
      />,
    );
    const $checkbox = container.firstChild as HTMLElement;
    expect($checkbox.childNodes?.[0]).toHaveClass(
      'klein-checkbox-wrapper-checked',
    );

    // value = [1, 2]
    rerender(
      <Checkbox.Group
        value={[1, 2]}
        options={[
          { label: 'A', value: 1 },
          { label: 'B', value: 2 },
        ]}
      />,
    );
    expect($checkbox.childNodes?.[0]).toHaveClass(
      'klein-checkbox-wrapper-checked',
    );
    expect($checkbox.childNodes?.[1]).toHaveClass(
      'klein-checkbox-wrapper-checked',
    );

    // value = []
    rerender(
      <Checkbox.Group
        value={[]}
        options={[
          { label: 'A', value: 1 },
          { label: 'B', value: 2 },
        ]}
      />,
    );
    expect($checkbox.childNodes?.[0]).not.toHaveClass(
      'klein-checkbox-wrapper-checked',
    );
    expect($checkbox.childNodes?.[1]).not.toHaveClass(
      'klein-checkbox-wrapper-checked',
    );

    // value = [-1]
    rerender(
      <Checkbox.Group
        value={[-1]}
        options={[
          { label: 'A', value: 1 },
          { label: 'B', value: 2 },
        ]}
      />,
    );
    expect($checkbox.childNodes?.[0]).not.toHaveClass(
      'klein-checkbox-wrapper-checked',
    );
    expect($checkbox.childNodes?.[1]).not.toHaveClass(
      'klein-checkbox-wrapper-checked',
    );
  });
  test('onChange', () => {
    const onGroupChange = jest.fn();
    const onOptionChange = jest.fn();
    const { container } = render(
      <Checkbox.Group
        options={[
          { label: 'A', value: 1 },
          { label: 'B', value: 2, onChange: onOptionChange },
        ]}
        onChange={onGroupChange}
       />,
    );

    const $inputList = container.querySelectorAll('.klein-checkbox-input');
    expect($inputList[0]).toBeInTheDocument();

    // checked
    fireEvent.click($inputList[0]);
    expect(onGroupChange).toHaveBeenCalledTimes(1);
    expect(onGroupChange).toHaveBeenLastCalledWith([1]);

    // unchecked
    fireEvent.click($inputList[0]);
    expect(onGroupChange).toHaveBeenCalledTimes(2);
    expect(onGroupChange).toHaveBeenLastCalledWith([]);

    // checked all
    fireEvent.click($inputList[1]);
    fireEvent.click($inputList[0]);
    expect(onOptionChange).toHaveBeenCalledTimes(1);
    expect(onGroupChange).toHaveBeenCalledTimes(4);
    expect(onGroupChange).toHaveBeenLastCalledWith([1, 2]);
  });
  test('value changed', () => {
    const onGroupChange = jest.fn();
    const { container, rerender } = render(
      <Checkbox.Group onChange={onGroupChange}>
        <Checkbox value={1}>A</Checkbox>
      </Checkbox.Group>,
    );

    const $inputList = container.querySelectorAll('.klein-checkbox-input');
    expect($inputList[0]).toBeInTheDocument();

    // checked
    fireEvent.click($inputList[0]);
    expect(onGroupChange).toHaveBeenLastCalledWith([1]);

    // value changed 之后重新注册已选的 value
    rerender(
      <Checkbox.Group onChange={onGroupChange}>
        <Checkbox value={11}>A</Checkbox>
      </Checkbox.Group>,
    );

    fireEvent.click($inputList[0]);
    expect(onGroupChange).toHaveBeenLastCalledWith([11]);

    // skipGroup
    rerender(
      <Checkbox.Group onChange={onGroupChange}>
        <Checkbox value={11}>A</Checkbox>
        <Checkbox skipGroup value={2}>
          A
        </Checkbox>
      </Checkbox.Group>,
    );

    expect(onGroupChange).toHaveBeenLastCalledWith([11]);
  });
});
