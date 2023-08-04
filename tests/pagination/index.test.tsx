import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Pagination } from 'klein';

type targetType = Record<string, string>;

const paginationPrefix = 'klein-pagination';
const wrapperArr = ['default', 'mini', 'simple', 'disabled'];
const itemCls = [
  'item',
  'item-active',
  'item-link',
  'prev',
  'next',
  'jump-next',
  'total-text',
];

const pageWrapper: targetType = {};
const pageItemCls: targetType = {};

function createClasses(arr: string[], target: targetType) {
  arr.forEach((v: string) => {
    target[v] = `${paginationPrefix}-${v}`;
  });
}

createClasses(wrapperArr, pageWrapper);
createClasses(itemCls, pageItemCls);

describe('Pagination', () => {
  test('default pagination', () => {
    const wrapper = render(<Pagination />);
    const el = wrapper.queryByText('0');

    expect(wrapper.getByTitle('0')).toBeInTheDocument();
    expect(el).toBeTruthy();
  });

  test('when total is 0', () => {
    const { getByRole, queryByText } = render(<Pagination total={0} />);

    const list = getByRole('list');
    const liNum = list.querySelectorAll('li').length;

    expect(liNum).toBe(3);
    expect(queryByText('0')).toBeTruthy();
  });

  test('the current page is the first page. The prev button is not available', () => {
    const { getAllByRole } = render(<Pagination total={100} />);
    const btns = getAllByRole('button');
    const prevBtn = btns[0];

    expect(prevBtn).toBeDisabled();
  });

  test('The current page is the last page. The next button is not available', () => {
    const { getAllByRole } = render(
      <Pagination total={100} pageSize={10} current={10} />,
    );
    const btns = getAllByRole('button');
    const nextBtn = btns[btns.length - 1];

    expect(nextBtn).toBeDisabled();
  });

  test('change to page 2', () => {
    let currPage = 1;
    const { getByTitle } = render(
      <Pagination
        total={100}
        onChange={(page: number) => {
          currPage = page;
        }}
      />,
    );
    const pageItem2 = getByTitle('2');
    fireEvent.click(pageItem2);

    expect(pageItem2).toHaveClass(pageItemCls['item-active']);
    expect(currPage).toBe(2);
  });

  test('show more pages', () => {
    const { getByTitle, getByText } = render(<Pagination total={200} />);
    const nextJumpItem = getByTitle('向后 5 页');

    expect(nextJumpItem).toHaveClass(pageItemCls['jump-next']);
    expect(getByText(/•••/)).toBeInTheDocument();
  });

  test('mini size pagination', () => {
    const { getByRole } = render(<Pagination total={100} size="mini" />);
    const ul = getByRole('list');

    expect(ul).toHaveClass(pageWrapper.mini);
  });

  test('simple pagination', () => {
    const { getByRole, getByTitle } = render(
      <Pagination total={100} pageSize={10} simple />,
    );
    const ul = getByRole('list');
    const li = ul.querySelectorAll('li').length;
    const inputLi = getByTitle('1/10');

    expect(ul).toHaveClass(pageWrapper.simple);
    expect(li).toBe(3);
    expect(inputLi).toBeInTheDocument();
  });

  test('disabled pagination', () => {
    let currPage = 1;
    const { getByRole, getByTitle } = render(
      <Pagination
        total={100}
        onChange={(page: number) => {
          currPage = page;
        }}
        disabled
      />,
    );
    const ul = getByRole('list');
    const pageItem2 = getByTitle('2');
    fireEvent.click(pageItem2);

    expect(ul).toHaveClass(pageWrapper.disabled);
    expect(currPage).toBe(1);
  });

  test('when pagination has quick jumper', () => {
    const wrapper = render(<Pagination total={100} showQuickJumper />);

    expect(wrapper.getByText(/跳至/)).toBeInTheDocument();
    expect(wrapper.getByText(/页/)).toBeInTheDocument();
  });

  test('show totals', () => {
    const { getByRole, getByText } = render(
      <Pagination
        total={100}
        showTotal={(totals: number, range: number[]) => {
          return (
            <p
              style={{ width: 125, margin: 0, whiteSpace: 'nowrap' }}
            >{`${range[0]}-${range[1]}, 共${totals}条`}</p>
          );
        }}
      />,
    );
    const ul = getByRole('list');
    const pageItem2 = ul.querySelectorAll('li')[0];

    expect(pageItem2).toHaveClass(pageItemCls['total-text']);
    expect(getByText(/共\d+条/)).toBeInTheDocument();
  });

  test('customize itemRender', () => {
    const sty = {
      fontSize: '12px',
    };
    const { getByTitle, getByText } = render(
      <Pagination
        total={100}
        itemRender={(
          currentPage: number,
          type: string,
          originalElement: React.ReactNode,
        ) => {
          if (type === 'prev') {
            return <span style={sty}>Prev</span>;
          }
          if (type === 'next') {
            return <a style={sty}>Next</a>;
          }
          return originalElement;
        }}
      />,
    );
    const prevPageItem = getByTitle('上一页');
    const nextPageItem = getByTitle('下一页');

    expect(prevPageItem).toHaveClass(pageItemCls.prev);
    expect(nextPageItem).toHaveClass(pageItemCls.next);
    expect(getByText(/Prev/)).toBeInTheDocument();
    expect(getByText(/Next/)).toBeInTheDocument();
  });
});
