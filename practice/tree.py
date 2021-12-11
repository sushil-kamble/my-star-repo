from collections import deque


class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def levelOrderTraversal(root: Node) -> list[list]:
    if root is None:
        return [[]]
    queue = deque([root])
    levels = []
    while len(queue) > 0:
        subLevel = []
        n = len(queue)
        for i in range(n):
            node = queue.popleft()
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
            subLevel.append(node.val)
        levels.extend(subLevel)
    return levels


if __name__ == '__main__':
    root = Node(3)
    root.left = Node(2)
    root.left.right = Node(1)
    root.left.right.left = Node(5)
    root.left.right.right = Node(3)
    print(levelOrderTraversal(root))
