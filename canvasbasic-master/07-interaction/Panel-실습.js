//선택된 박스가 뜨는 패널 클래스
class Panel {
	constructor() {
		this.scale = 0;
		this.angle = 0; //회전 각도
	}

	draw() {
		context.fillStyle = 'rgba(255,0,0,0.8)';
		//변환 초기화
		context.resetTransform();
		// context.setTransform(1,0,0,1,0,0);
		context.translate(oX,oY);
		context.scale(this.scale, this.scale);
		context.rotate(canUtil.toRadian(this.angle));


		context.translate(-oX,-oY); //0 0이 아니라 그냥 그만큼 다시 돌려주는것
		context.fillRect(oX - 150, oY - 150, 300, 300);

		context.resetTransform(); //회복 - 패널 크기만 커지고 나머지 캔버스 컨텍스트들은 커지지 않음
	}

	//텍스트 보이게 하기
	showContent(){
		console.log('showContent 실행')
		context.fillStyle = '#fff';
		context.fillText(selectedBox.index, oX, oY);
	}
	
}