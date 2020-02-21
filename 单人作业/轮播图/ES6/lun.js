// class Lunbo {
//     constructor(element) {
//       this.viewport = element;
//       this.father = element.children[0];
//       this.photos = this.father.children;
//       // 自设的图片宽, 包括 margin
//       this.photoWidth = this.photos[0].offsetWidth + parseInt(getComputedStyle(this.photos[0]).marginLeft) + parseInt(getComputedStyle(this.photos[0]).marginRight);
  
//       // 注册移动事件
//       element.children[1].addEventListener('click', this.left.bind(this));
//       element.children[2].addEventListener('click', this.right.bind(this));
//     }
  
//     load() {
  
//     }
  
//     left() {
//       this.load(this.showingId - 1);
//     }
  
//     right() {
//       this.load(this.showingId + 1);
//     }
//   }
  //调用添加事件的方法
  class Slider{
    constructor(id){
    //实例属性
    //大盒子
    this.oBigBox = getEle(’#’ + id);
    //获取所有的ul中的li
    this.oUllis = this.oBigBox.children[0].children;
    //计算图片数量
    this.num = this.oUllis.length;
    //创建元素对象并返回所有的小圆点
    this.ollis = this.createEle();
    //控制轮播的当前下标
    this.indexA = 0;
    //获取文字信息的div
    this.div = getEle(’#msg’);
    //调用轮播方法
    this.slide();
    //获取左按钮
    this.ltBtn = getEle(’#ltBtn’);
    //获取右按钮
    this.rtBtn = getEle(’#rtBtn’);
	this.addEventWithElement();
	
	//记录计时器的属性
	this.timer = null;
	//调用自动轮播方法
	this.autoPlay();
}
createEle(){
	//1. 创建小圆点
	//1.1 创建ol
	var ol = $create('ol');
	//1.2 创建一个数组存放所有的li
	var arr = [];
	//1.3 创建li
	for(var i = 0;i < this.num;i ++){
		var li = $create('li');
		ol.appendChild(li);
		arr.push(li);
	}
	//1.4 将ol放到页面中
	this.oBigBox.appendChild(ol);
	//2. 创建左右按钮
	//2.1 创建左按钮
	var leftBtn = $create('span');
	leftBtn.innerHTML = "&lt;";
	leftBtn.id = 'ltBtn';
	this.oBigBox.appendChild(leftBtn);
	//2.2 创建右按钮
	var rightBtn = $create('span');
	rightBtn.innerHTML = '&gt;';
	rightBtn.id = 'rtBtn';
	this.oBigBox.appendChild(rightBtn);
	//3. 创建文字信息的div
	var div = $create('div');
	div.id = 'msg';
	this.oBigBox.appendChild(div);
	//返回所有小圆点
	return arr;
}
slide(){
	//遍历所有的图片及小圆点
	for(var i = 0;i < this.num;i ++){
		//将所有的图片隐藏
		this.oUllis[i].style.display = 'none';
		//将所有的小圆点红色
		this.ollis[i].style.backgroundColor = 'red';
	}
	//将当前图片显示
	this.oUllis[this.indexA].style.display = 'block';
	//将当前小圆点蓝色
	this.ollis[this.indexA].style.backgroundColor = 'blue';
	//设置文字信息
	this.div.innerHTML = this.oUllis[this.indexA].firstElementChild.firstElementChild.alt;
}
addEventWithElement(){
	var that = this;
	//1. 给左按钮添加点击事件
	this.ltBtn.onclick = function(){
		that.indexA --;
		if(that.indexA === -1){
			that.indexA = that.num - 1;
		}
		that.slide();
	}
	//2. 给右按钮添加点击事件
	this.rtBtn.onclick = function(){
		that.indexA ++;
		if(that.indexA === that.num){
			that.indexA = 0;
		}
		that.slide();
	}
	//3. 给小圆点添加移入事件
	for(var i = 0;i < this.num;i ++){
		this.ollis[i].index = i; //给每一个li添加一个index属性记录当前移入的下标
		this.ollis[i].onmouseenter = function(){
			that.indexA = this.index;
			that.slide();
		}
	}
}
autoPlay(){
var that = this;
	this.timer = setInterval(function(){
		that.indexA ++;
		if(that.indexA === that.num){
			that.indexA = 0;
		}
		that.slide();
	},3000)
	this.oBigBox.onmouseenter = function(){
		clearInterval(that.timer);
	}
	this.oBigBox.onmouseleave = function(){
		that.autoPlay();
	}
}
