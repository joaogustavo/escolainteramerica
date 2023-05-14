//media query abaixo de 767pxs
if (window.matchMedia('(max-width: 767px)').matches)
{
	//troca de 'ul' para selec 'select' e 'li' para 'option', (ativo com reload se ouver reducao na largura de browser via usuario)
  $('ul.nav-cat-menu').each(function() {
      var list = $(this), select = $(document.createElement('select')).insertBefore($(this).hide());

      $('>li a', this).each(function() {
          var target = $(this).attr('target'),
          option = $(document.createElement('option'))
              .appendTo(select)
              .val(this.href)
              .html($(this).html())
              .click(function(){
                  if(target==='_blank') {
                      window.location.href($(this).val());
                  }
                  else {
                      window.location.href = $(this).val();
                  }
              });
      });
      $('select').change(function(){
        location = this.options[this.selectedIndex].value;
      });
      list.remove();
  });
}






//titulos contagem caracteres para adaptacao de estilos css
var titulos = document.getElementById("titulos");

if(titulos.innerHTML.length > 104){
  titulos.style.fontSize = "28px";
  titulos.style.maxWidth = "1110px";
  titulos.style.wordSpacing = ".2rem";
}





//media query abaixo de 767pxs
if (window.matchMedia('(max-width: 767px)').matches)
{
//titulos contagem caracteres para adaptacao de estilos css (dispositivo movel)
var titulos = document.getElementById("titulos");

if(titulos.innerHTML.length > 104){
  titulos.style.fontSize = "16px";
  titulos.style.maxWidth = "757px";
  titulos.style.wordSpacing = ".2rem";
}
}






//menus internos
var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
	menuRight = document.getElementById( 'cbp-spmenu-s2' ),
	menuTop = document.getElementById( 'cbp-spmenu-s3' ),
	menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
	showLeft = document.getElementById( 'showLeft' ),
	showRight = document.getElementById( 'showRight' ),
	showTop = document.getElementById( 'showTop' ),
	showBottom = document.getElementById( 'showBottom' ),
	showLeftPush = document.getElementById( 'showLeftPush' ),
	showRightPush = document.getElementById( 'showRightPush' ),

	body = document.body;
	showLeft.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuLeft, 'cbp-spmenu-open' );
	disableOther( 'showLeft' );
	};
	showRight.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( menuRight, 'cbp-spmenu-open' );
		disableOther( 'showRight' );
	};
	showTop.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( menuTop, 'cbp-spmenu-open' );
		disableOther( 'showTop' );
	};
	showBottom.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( menuBottom, 'cbp-spmenu-open' );
		disableOther( 'showBottom' );
	};
	showLeftPush.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( body, 'cbp-spmenu-push-toright' );
		classie.toggle( menuLeft, 'cbp-spmenu-open' );
		disableOther( 'showLeftPush' );
	};
	showRightPush.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( body, 'cbp-spmenu-push-toleft' );
		classie.toggle( menuRight, 'cbp-spmenu-open' );
		disableOther( 'showRightPush' );
	};

	function disableOther( button ) {
		if( button !== 'showLeft' ) {
			classie.toggle( showLeft, 'disabled' );
		}
		if( button !== 'showRight' ) {
			classie.toggle( showRight, 'disabled' );
		}
		if( button !== 'showTop' ) {
			classie.toggle( showTop, 'disabled' );
		}
		if( button !== 'showBottom' ) {
			classie.toggle( showBottom, 'disabled' );
		}
		if( button !== 'showLeftPush' ) {
			classie.toggle( showLeftPush, 'disabled' );
		}
		if( button !== 'showRightPush' ) {
			classie.toggle( showRightPush, 'disabled' );
		}
	}