var weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function Date() {
	this.getDay = () => getRandomInt(8);
}

function myGetDay() {
  var date = new Date();
  var day = date.getDay();
  return weekdays[day] || 'Strange day';
}