## 4. Queue

: 선입선출(FIFO: First In First Out)의 원칙을 따르는 데이터 구조.

- 큐에 먼저 들어온 데이터가 먼저 나간다.

### 구현방법

- 내장 배열 활용
  - push + shift
  - unshift + pop
- 단일 연결 리스트 활용
  - push + shift 활용
  - pop으로 빼는 것은 느리기 때문

### 1) Enqueue Pseudocode

- 입력받은 값으로 새로운 노드 생성
- 큐 안에 노드가 없다면, first & last를 새로운 노드로
- 큐 안에 노드가 있다면,
  - 현재 last.next를 새로운 노드로 설정
  - last를 새로운 노드로 업데이트
- size + 1

### 2) Dequeue Pseudocode

- 큐 안에 노드가 없다면, null 리턴
- first를 변수에 저장
- 큐에 노드가 하나밖에 없다면,
  - first & last = null
- 큐에 노드가 하나 이상 있다면,
  - first를 다음 노드로 업데이트
- size - 1
- 변수에 저장했던 이전 first 노드를 리턴

### Big O

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)
