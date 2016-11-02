$(function () {
	// mousemove
	// mouseover
    $(document).on('mousemove','.slope-3d-cont',function() {
    	var angle = 10;

        // console.log(this);
        // console.log(event);
        //获取当前元素的宽度和高度
        var width = $(this).width();
        var height = $(this).height();
        //获取鼠在当前元素块上的位置(x轴,y轴)
        var layerX = event.layerX;
        var layerY = -(event.layerY-height);
        //获取元素的中间点x,y值
        var widthMiddle = width/2;
        var heightMiddle = height/2;
        //获取鼠标相对原点的坐标(原点在元素中间)
        var xSize = layerX - widthMiddle;
        var ySize = layerY - heightMiddle;

        //获取背景的x轴的旋转角度
        var angleX = angle/heightMiddle*ySize;
        //获取背景的y轴的旋转角度
        var angleY = angle/widthMiddle*xSize;

        $(this).children('.slope-3d-box').css('-webkit-transform','rotateX('+angleX+'deg) rotateY('+angleY+'deg)');

        // console.log("width:"+width);
        // console.log("height;"+height);
        // console.log("layerX:"+layerX);
        // console.log("layerY:"+layerY);
        // console.log("widthMiddle:"+widthMiddle);
        // console.log("heightMiddle;"+heightMiddle);
        // console.log("xSize:"+xSize);
        // console.log("ySize:"+ySize);
        // console.log("angleX:"+angleX);
        // console.log("angleY:"+angleY);
        // console.log("==========================")
    })

	$(document).on('mouseout','.slope-3d-cont',function() {
		$(this).children('.slope-3d-box').css('-webkit-transform','rotateX(0deg) rotateY(0deg)');
		// $(this).children('.slope-box-text').css('-webkit-transform','rotateX(0deg) rotateY(0deg)');
	})
})