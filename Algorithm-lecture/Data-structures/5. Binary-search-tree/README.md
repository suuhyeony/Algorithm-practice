## 5. Binary Search Tree

### Tree

: 부모-자식 노드로 이루어진 비선형 데이터 구조

- 여러 갈래로 나뉠 수 있다
- 부모가 자식을 가리키고 있어야 한다
- 모든 노드가 루트에서 멀어지는 방식으로 연결된다
- 연결 리스트도 트리의 한 종류가 될 수도 있다
- 하나의 루트를 가져야 한다

#### Tree terminology

- root: 최상단의 노드
- leaf: 자식이 없는 노드
- child: 루트에서 멀어지는 방향으로 연결된 노드
- parent: 자식과 반대 개념의 노드
- siblings: 같은 부모를 가지는 노드
- edge: 한 노드에서 다른 노드로 향하는 화살표

#### 사용 예시

- HTML DOM
- Network routing
- 추상 구문 트리 (ex. while..)
- 인공 지능
- 컴퓨터 파일 시스템
- JSON

### Binary Tree

: 각 노드가 최대 두 개의 자식을 가지는 트리

### Binary Search Tree

: 이진 트리의 한 종류로, 부모 노드보다 작은 값을 가진 노드는 왼쪽에, 큰 값을 가진 노드는 오른쪽에 위치하는 트리

- 데이터가 특정 순서에 따라 저장되어 있다
- 데이터를 비교해서 정렬 가능하게 저장한다
- 일반적으로는 숫자를 다룬다
- 순서가 있기 때문에, 노드를 찾고 추가하는 것이 쉽고 빠르다
- 매번 비교를 할 때마다 검색 대상의 수가 약 절반으로 줄어든다

#### 1) Inserting pseudocode

- 새로운 노드 생성
- 루트가 없다면, 새로운 노드를 루트로 업데이트
- 루트가 있다면, 새로운 노드와 루트 크기 비교
  - 새로운 노드가 더 크면, 비교 대상의 오른쪽에 노드가 있는지 확인
    - 없으면, 그 자리에 새로운 노드를 추가
    - 있다면, 반복하여 비교
  - 새로운 노드가 더 작으면, 비교 대상의 왼쪽에 노드가 있는지 확인
    - 없으면, 그 자리에 새로운 노드를 추가
    - 있다면, 반복하여 비교

#### 2) Finding pseudocode

- 루트가 없다면, undefined 리턴
- 루트가 있고, 찾는 값이 같다면 리턴
- 그렇지 않다면, 크기 비교
  - 찾는 값이 비교 대상보다 더 크다면 오른쪽에 노드가 있는지 확인
    - 없다면, 찾는 대상 없음
    - 있다면, 반복하여 비교
  - 찾는 값이 비교 대상보다 더 작다면 왼쪽에 노드가 있는지 확인
    - 없다면, 찾는 대상 없음
    - 있다면, 반복하여 비교

#### Big O

: 노드의 숫자가 두배로 늘어도, 한 단계만 더 비교하면 된다.

평균적으로는,

- Insertion: O(log n)
- Searching: O(log n)

트리가 극단적으로 한쪽으로 치우친 최악의 경우에는 O(n)