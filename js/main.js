$(document).ready(function () {
	var offset = $('#fixed_specs').offset();
	var topPadding = 0;
	$(window).scroll(function() {
		if ($(window).scrollTop() > offset.top) {
			$('#fixed_specs').stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
		}
		else {
			$('#fixed_specs').stop().animate({marginTop: 0});
		}
	});
});
$(document).ready(function(){
	$('.tab-content:first').show(0);
	$('.tab:first>span').addClass('selected');
	$('.tab>span').click(function(){
		$('.tab>span').removeClass('selected');
		$(this).addClass('selected'); 
		$('.tab-content').hide(0);   
		$(this).next('.tab-content').show(0);     
	});
});

var signup_h = document.getElementById('signup_h');
var myEl_signup_h = document.getElementById('modal-body');
signup_h.onclick = function(){
    myEl_signup_h.style.height = '603px';
};

var signin_h = document.getElementById('signin_h');
var myEl_signin_h = document.getElementById('modal-body');
signin_h.onclick = function(){
    myEl_signin_h.style.height = '329px';
};










$('.item_test span').on('click',function(){
  $(this).siblings('.submain').toggle('easing')
  $(this).siblings('.fa').toggleClass('rotate')
});




var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");
var krugLeft = document.querySelector(".krug_left");
var krugRight = document.querySelector(".krug_right");

function setLeftValue() {
	var _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);
		console.log('1:',_this.value);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

	$('.min_value').text(_this.value)

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
	krugLeft.style.left= percent + "%";
}
setLeftValue();

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);
		console.log('2:',_this.value);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

	$('.max_value').text(_this.value)
	
	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
	krugRight.style.right= (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
	thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
	thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
	thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
	thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("active");
});

