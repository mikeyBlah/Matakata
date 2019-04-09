window.onload = function(){
//Variables
const hamburgerIcon = document.querySelector('#show_nav_icon');
const navi = document.querySelector("#slide_nav");


//Footer display this year
function displayDate() {
  var d = new Date();
  var y = d.getFullYear();
  document.getElementById("thisYear").innerHTML = y;
}
displayDate();

//SLIDE NAV
hamburgerIcon.addEventListener("click", function(){
	console.log('Clicked');
	if(navi.style.left === 'calc(100% + 200px)') {
		hamburgerIcon.classList.add('open');
    navi.style.left = '0px';
  } else {
		navi.style.left = 'calc(100% + 200px)';
		hamburgerIcon.classList.remove('open');
  }
});

function show_pro_extend(){
	var pro_01 = document.getElementById("pro_01_extend");
	var btn_pro = document.getElementById("more_pro_01");
	var vid = document.getElementById("video_01");

	if(pro_01.style.display === 'none') {
    pro_01.style.display = 'block';
	vid.style.display = 'block';
	btn_pro.style.backgroundImage = 'url(../img/minus.svg)';

  } else {
    pro_01.style.display = 'none';
	vid.style.display = 'none';
	btn_pro.style.backgroundImage = 'url(../img/plus.svg)';
  }

}
function show_pro_extend_02(){
	var pro_02 = document.getElementById("pro_02_extend");
	var btn_pro = document.getElementById("more_pro_02");

	if(pro_02.style.display === 'none') {
    pro_02.style.display = 'block';
	btn_pro.style.backgroundImage = 'url(../img/minus.svg)';
  } else {
    pro_02.style.display = 'none';
	btn_pro.style.backgroundImage = 'url(../img/plus.svg)';
  }

}

function show_pro_extend_03(){
	var pro_03 = document.getElementById("pro_03_extend");
	var btn_pro = document.getElementById("more_pro_03");

	if(pro_03.style.display === 'none') {
    pro_03.style.display = 'block';
	btn_pro.style.backgroundImage = 'url(../img/minus.svg)';
  } else {
    pro_03.style.display = 'none';
	btn_pro.style.backgroundImage = 'url(../img/plus.svg)';
  }

}
}