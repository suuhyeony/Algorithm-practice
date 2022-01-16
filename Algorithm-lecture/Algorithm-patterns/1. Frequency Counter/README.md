## 1. Frequency Counter

: js 객체 내 값과 그 빈도를 수집하는 방법. 한 값이 다른 값에 들어있는지 확인 등..(비교할 때 사용하기 좋음) 중첩 루프를 돌지 않고, 값이나 키에 등장한 빈도를 기록하는 패턴.

- 1. frequencyCounter 생성 및 빈도 카운트

```javascript
let frequencyCounter = {};
for (let val of arr1) {
  frequencyCounter1[val] = (frequencyCounter1 || 0) + 1;
}
```

- 2. key in [obj]를 활용해 원하는 key 비교
- 3. frequencyCounter[key] 를 활용해 빈도 카운트 비교
