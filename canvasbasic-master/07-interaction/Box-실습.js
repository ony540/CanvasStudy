//박스 클래스
class Box {
    constructor(index, x, y, speed) {
      this.index = index;
      this.x = x;
      this.y = y;
      this.speed = speed; //각자 다른 속도를 가짐
      this.width = 100;
      this.height = 100;
      this.draw(); // 이렇게하면 생성하자마자 draw함수가 실행됨!
    }

    draw() {
      context.fillStyle = 'rgba(0,0,0,0.5)';
      context.fillRect(this.x, this.y, 100, 100);
      context.fillStyle = '#fff';
      context.fillText(this.index, this.x + 30, this.y + 30);
    }

  }