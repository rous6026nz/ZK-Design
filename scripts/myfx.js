/*zk design website fx */
function linkOver(element, property, min, max, duration){
	$$(element).each(function(element){ 
	
		//mouseenter
		element.addEvent('mouseenter',function(){
		
			this.set('tween',  {
				duration: duration,
				transition: Fx.Transitions.Bounce.easeOut
			}).tween(property, max);
			
		});	
		
		//mouseout
		element.addEvent('mouseout',function(){
		this.set('tween',  {
				duration: duration,
				transition: Fx.Transitions.Bounce.easeOut
			}).tween(property, min);
			
		});
		
	});
}

function linkOverBtn(element){
	$$(element).each(function(element){ 
	
		var duration = 200;

	
		//mouseenter
		element.addEvent('mouseenter',function(){
		
			var myEffect = new Fx.Morph(this, {duration: 'short', transition: Fx.Transitions.Quad.easeOut});
 
			myEffect.start({
  			  'margin-top': 0,
			   'opacity': 1   
			});

						
		});	
		
		//mouseout
		element.addEvent('mouseout',function(){
			
			var myEffect = new Fx.Morph(this, {duration: 'short', transition: Fx.Transitions.Bounce.easeOut});
 
			myEffect.start({
  			  'margin-top': 10, 
			   'opacity': 0.2 
			});
						
		});
		
	});
}

window.addEvent('domready', function(){
	linkOverBtn('nav ul li a', 'opacity' );
	
	linkOver('nav ul li a', 'padding-left', 0, 20, 200 );
	var myTips = new Tips('nav ul li a', {
		fixed: true,
		offset: {x: -35, y: -35},
		text: '',
		className: 'tool-tip'
	
	});
	
	$$('nav ul li a').set('opacity', 0.2);

	
	$$('#searchform a').addEvent('click', function(){
		document.getElementById('searchform').submit();
		return false;
	});
	 

});