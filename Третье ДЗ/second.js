function getArea() {
	return this.width * this.height;
};

function getPerimeter() {
	return (this.width + this.height) * 2;
};

function Rectangle(width, height, units){
	this.width = width;
	this.height = height;
	this.units = units;
	this.getInfo = () => { 
		return `ширина: ${this.width} ${this.units}., ` +
		`высота ${this.height} ${this.units}.`; 
	};
};

var rec = new Rectangle(4, 6, 'cm');
console.log(rec.getInfo());
console.log(getArea.call(rec));
console.log(getPerimeter.call(rec));