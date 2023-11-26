// get : 속성의 값을 반환, set : 속성의 값을 설정

class Me {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge < 0) {
      throw new Error("나이가 왜 그래?");
    }
    this._age = newAge;
  }
}