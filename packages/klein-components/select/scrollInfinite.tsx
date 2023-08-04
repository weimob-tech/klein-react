import React from 'react';

export const scrollInfiniteFun = (
  infiniteHasMore: boolean,
  scrollInfinite: any,
  onPopupScroll: any,
) => {
  return async (event: any): Promise<void> => {
    const parentNode = event.currentTarget;
    const currentNode = event.target;
    const currentMenuIndex = Array.from(parentNode.childNodes).indexOf(
      event.target,
    );
    onPopupScroll?.(event, currentNode, currentMenuIndex);
    const {
      offsetHeight,
      scrollTop,
      scrollHeight,
    } = currentNode as HTMLDivElement;
    // console.log('offsetHeight + scrollTop >= scrollHeight...', offsetHeight, scrollTop, scrollHeight)
    // const isBottom = offsetHeight + scrollTop >= scrollHeight - 20;
    const isBottom = offsetHeight + scrollTop >= scrollHeight - 1;
    if (isBottom && infiniteHasMore && scrollInfinite) {
      // setLoading(true);
      const res = await (scrollInfinite as any)(event, currentMenuIndex);
      // setLoading(false);
      return res;
    }
  };
};

// // 避免影响已有select业务，重新增加一个casccader
// export const scrollInfiniteFunCascader = (
//   infiniteHasMore: boolean,
//   scrollInfinite: any,
//   onPopupScroll: any,
// ) => {
//   return async (event: any): Promise<void> => {
//     onPopupScroll?.(event);
//     const parentNode = event.currentTarget;
//     const currentNode = event.target;
//     const currentMenuIndex = Array.from(parentNode.childNodes).indexOf(event.target)
//     // console.log(Array.from(res).indexOf(event.target), '------res'); // szp
//     const { offsetHeight, scrollTop, scrollHeight } = currentNode as HTMLDivElement;
//     const isBottom = offsetHeight + scrollTop >= scrollHeight - 20;
//     if (isBottom && infiniteHasMore && scrollInfinite) {
//       // setLoading(true);
//       const res = await (scrollInfinite as any)(event, currentMenuIndex);
//       // setLoading(false);
//       // return res;
//     }
//   };
// };

// export default scrollInfiniteFun;
