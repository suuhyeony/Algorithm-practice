## 3. Stack

: 후입선출(LIFO: Last In First Out)의 원칙을 따르는 데이터들의 모음.

- 스택에 가장 마지막으로 추가된 요소는 가장 먼저 제거된다.
- 가장 먼저 추가한 데이터가 가장 나중에 제거된다.
- ex) call stack, 포토샵 실행취소/재실행, 방문기록

### 구현방법

- 내장 배열 활용

  - push + pop
  - shift + unshift

- 단일 연결 리스트
  : 상수 값의 시간복잡도를 위해 해당 방법 사용.
  - Stack class 정의
  - Node class 정의
  - shift & unshift 활용 (시작 방향만 다를뿐, 원리는 동일!)

### 1) Pushing Pseudocode

- 값을 입력 받아 새로운 노드 생성
- 스택에 노드가 없을 경우, 새로운 노드를 first & last로 설정
- 노드가 하나라도 있을 경우
  - 현재 first를 변수에 저장
  - 새로운 노드 = first로 업데이트
  - first.next를 이전 first노드와 연결
- size + 1

### 2) Pop Psuedocode

- 스택에 노드가 없다면, null을 리턴
- 현재 first를 변수에 저장
- 스택에 노드가 하나밖에 없다면,
  - first & last = null
- 스택에 노드가 하나 이상 있다면,
  - first를 다음 노드로 업데이트
- size - 1
- 변수에 저장했던 이전 first 노드를 리턴

### Big O

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)
