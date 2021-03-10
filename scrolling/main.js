// $(function(){
// 	console.log('Duc nguyen : '+ Date.now());
// $(document).bind('touchstart', function(e){
// 	console.log('touch start ::: ', e);
// 	e.preventDefault();
// });
// $(document).bind('touchmove', function(e){
// 	console.log('touch move ::: ', e);
// 	e.preventDefault();
// });
// $(document).bind('touchend', function(e){
// 	console.log('touch end ::: ', e);
// 	e.preventDefault();
// });
// console.log($(document));
// });
(() => {
	console.log(' duc nguyen : ' + Date.now());

	document.addEventListener('click',function(){
		console.log(' duc nguyen zzzz : ' + Date.now());
	});

	document.addEventListener('touchstart', function(e) {
		let self = this;
		let threshold = 10,
			startX = e.touches[0].screenX,
			startY = e.touches[0].screenY;
		e.preventDefault();
		console.log('sdfsdf sdf sdf sd f sdf sd f ds');
		// // Fix weird touch event on tablet and mobile.
		// let $target = $(e.target);
		// if( $target.hasClass('group-content') || $target.hasClass('grid') || $target.hasClass('blank-cell') ) {
		// 	msite.util.eatEvent(e);
		// }

		function removeListeners() {
			document.removeEventListener('touchmove', touchMove);
			document.removeEventListener('touchend', touchEnd);
		}

		function touchMove(e) {
			if (Math.abs(startX - e.touches[0].screenX) > threshold || Math.abs(startY - e.touches[0].screenY) > threshold) {
				//msite.util.eatEvent(e);
				removeListeners();
			}
			e.preventDefault();
		}

		function touchEnd(e) {
			removeListeners();
			e.preventDefault();
			//self.clickCallback.call(self, e);
		}

		document.addEventListener('touchmove', touchMove);
		document.addEventListener('touchend', touchEnd);
	}.bind(this));
})();
