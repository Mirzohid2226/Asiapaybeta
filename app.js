window.addEventListener('scroll',function(){
			var header = document.querySelector('header');
			header.classList.toggle('sticy',window.scrollY > 0);
		});
function toggleMenu(){
	var menuTogle = document.querySelector('.toggle');
	var menu = document.querySelector('.menu');
	menuTogle.classList.toggle('active');
	menu.classList.toggle('active');
}