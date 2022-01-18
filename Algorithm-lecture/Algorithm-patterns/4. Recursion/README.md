## 4. Recursion

#### 재귀란?

: 자기 자신을 호출하는 함수. (반드시 마치는 지점이 있어야 한다)

#### 왜 알아야 할까?

- 자주 사용되는 함수이다.
  ex. JSON.parse / JSON.stringify / DOM / 객체 순회 등등..
- 트리 등 복잡한 데이터 구조를 순회해야할 때 사용하기 좋다.
- 순환식 구조보다 깔끔하고 낫다.

#### 스택 호출하기

: 함수가 호출되면 보통 값을 돌려주기를 기다리는데, js에서 이것을 관리하는 데이터 구조를 콜 스택이라고 한다.  
호출 스택의 맨 위에 있는 함수만 기억하고, 컴파일러가 맨 위의 함수를 실행 후 제거한다. (꼭대기에서부터 하나씩 정리됨)  
재귀는 호출 스택에 계속 함수를 밀어넣는 작업이라고 할 수 있다.

#### 재귀함수 필수 조건

- 언제 멈추지? = 기반 조건(base case)
  - while 루프가 끝나는 지점이 반드시 존재해야 함.
- different input (매번 다른 입력값을 가져야 함)

```javascript
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
```

#### 발생 문제

- 기반조건이 없거나 잘못된 경우
  - 계속해서 콜 스택에 함수가 쌓인다.
  - maximum call stack size exeded
- return 값이 잘못된 경우
  - 기반조건에 걸릴 수 없다.
- return을 하지 않는 경우
  - 호출 스택 크기 초과

#### 헬퍼 메소드 재귀

: 함수 내에서 자기 자신을 호출하지 않고, 두 개의 함수를 사용. (재귀형이 아닌 외부 함수 안에서 재귀함수를 호출하는 것)  
배열이나 데이터 리스트를 합칠 필요가 있을 때 자주 사용.

```javascript
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
```

#### 순수 재귀 tips

spread / slice / concat / object.assign 등 사용하기 (헬퍼 메소드X)

```javascript
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // 결과값 쌓아 나가기
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
```
