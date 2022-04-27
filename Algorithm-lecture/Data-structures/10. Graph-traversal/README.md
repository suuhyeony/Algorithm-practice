## 10. Graph Traversal

: 방문, 최신화, 확인, 탐색, 출력 등을 모든 정점에 대해 수행하는 것.

#### 트리와 다른 점

- 그래프를 순회할 때는 시작점을 정해주어야 함
- 여러 길이 있을 수 있음

#### Graph traversal uses

- peer to peer networking
- web crawlers
- finding 'closest'
  - matches/recommendations
- shortest path problems
  - GPS navigation
  - sloving mazes
  - AI (shortest path to win the game)

### Depth First

: explore as far as possible down on branch before 'backtracking'

#### DFS Pseudocode

1. Recursive

- if vertex is empty
  - return (= base case)
- mark vertex as visited
- for each neighbor in vertex's neighbors
  - if neighbor is not visited
    - recursively call DFS on neighbor

2. Iterative

- let S be a stack
- S.push(start)
- while S is not empty
  - vertex = S.pop()
  - if vertex is not labeled as discovered
    - visit vertex (add to result list)
    - label vertex as discovered
    - for each of vertex's neighbors, do
      - S.push(vertex's neighbor)

### Breadth First

: visit neighbors at current depth first

#### BFS Pseudocode

- this function should accept a starting vertex
- create a queue and place the starting vertex in it
- create an array to store the nodes (= result)
- create an object to store nodes visitied (= visited)
- mark the starting vertex as visited
- loop as long as there is anything in the queue
  - remove the first vertex from the queue and push it into the result array that stores nodes visited
  - loop over each vertex in the adjacency list for the vertex you are visiting
  - if it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
