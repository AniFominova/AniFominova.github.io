$('.show_popup').click(function() {
	var popup_id = $('#' + $(this).attr("rel"));
	$(popup_id).show();
	$('.bg_popup').show();
});
$('.close_popup').click(function() {
	$('.bg_popup, .popup').hide();
});

$(document).ready(function(){
	$(document).on('click','.dropdown-toggle',function(){
		var nav = $('.dropdown-menu');
		$('.dropdown-toggle').toggleClass('active');
		nav.toggleClass('show')

	})
});

(function(){
var a = document.querySelector('#aside1'), b = null, P = 70;
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);
function Ascroll() {
  if (b == null) {
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';
    a.style.padding = '0';
    a.style.border = '0';
  }
  var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#article').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
  if ((Ra.top - P) <= 0) {
    if ((Ra.top - P) <= R) {
      b.className = 'stop';
      b.style.top = - R +'px';
    } else {
      b.className = 'sticky';
      b.style.top = P + 'px';
    }
  } else {
    b.className = '';
    b.style.top = '';
  }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);
}
})()

var tab;
var tabContent;

window.onload=function () {
  tabContent=document.getElementsByClassName('tabContent');
  tab=document.getElementsByClassName('tab');
  hideTabsContent(1);
}
function hideTabsContent(a) {
  for (var i = a; i<tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
    tab[i].classList.remove('whiteborder');
  }
}

document.getElementById('tabs').onclick=function (event) {
  var target=event.target;
  if (target.className=='tab'){
    for (var i=0; i<tab.length; i++){
      if (target == tab[i]){
        showTabsContent(i);
        break;
      }
    }
  }
}
function showTabsContent(b) {
  if (tabContent[b].classList.contains('hide')){
    hideTabsContent(0);
    tab[b].classList.add('whiteborder');
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');

  }
}



// Изменение пункта меню при прокрутке 

var menu_selector = "#top-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
 
$(document).ready(function () {
 
    $(document).on("scroll", onScroll);
 
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });
 
});

$(".accordion dd").hide().prev().click(function() {
  $(this).parents(".accordion").find("dd").not(this).slideUp().prev().removeClass("active");
  $(this).next().not(":visible").slideDown().prev().addClass("active");
});


