function changeColor() {
  var colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];
  var circle = document.getElementById('circle');
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  circle.classList.remove('bg-gray-500');
  circle.classList.add(randomColor);
}
