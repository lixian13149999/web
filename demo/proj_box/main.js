$(function () {
	$(document).on('mouseenter','.cont>.cont-item',function () {
		
		// setTimeout(function () {
			
			//console.log("abc");
			$('.cont>.cont-item').each(function (index,ele) {
				$(ele).removeClass('active');
				// console.log(index);
				// console.log(ele);
			});
			$(this).addClass('active');
		// },500);
	});
});