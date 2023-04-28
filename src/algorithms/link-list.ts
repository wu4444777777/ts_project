/**
 * @description 链表
 * @author wusiqi
 * @date 11/04/2023
 */

interface LinkListNode {
  value: number,
  next?: LinkListNode
}

/**
 * 单向链表
 * @param {number[]} arr
 * @return {*}  {LinkListNode}
 */
function createLinkList(arr: number[]): LinkListNode {
  const length = arr.length;
  if(length === 0) throw new Error("数组是空的");
  let currentNode: LinkListNode = {
    value: arr[length - 1]
  };
  if(length === 1) return currentNode;
  for(let i = length - 2; i >=0; i --) {
    currentNode = {
      value: arr[i],
      next: currentNode
    }
  }
  return currentNode;
}

const arr = [100, 200, 300, 400, 500];
const list = createLinkList(arr);
console.log(list);