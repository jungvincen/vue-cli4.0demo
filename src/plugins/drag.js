/*
* js实现div可拖拽
* @params title 可以点击拖动的元素
* @params content 拖动的整体元素 必须是position: absolute;
* 思想：鼠标的clienX/clientY相对值设置为父元素的left/top的相对值
*/

var dragBox = function (drag, wrap) {

    function getCss(ele, prop) {
        return parseInt(window.getComputedStyle(ele)[prop]);
    }

    var initX,
        initY,
        dragable = false,
        wrapLeft = getCss(wrap, "left"),
        wrapRight = getCss(wrap, "top");

    drag.addEventListener("mousedown", function (e) {
        dragable = true;
        initX = e.clientX;
        initY = e.clientY;
    }, false); 

    document.addEventListener("mousemove", function (e) {
        if (dragable === true ) {
            var nowX = e.clientX,
                nowY = e.clientY,
                disX = nowX - initX,
                disY = nowY - initY;
            wrap.style.left = wrapLeft + disX + "px";
            wrap.style.top = wrapRight + disY + "px";
        }
    });

    drag.addEventListener("mouseup", function (e) {
        dragable = false;
        wrapLeft = getCss(wrap, "left");
        wrapRight = getCss(wrap, "top");
    }, false); 

};

function doDrag(title, content){
    dragBox(document.querySelector(title), document.querySelector(content));
}

export default {
	install(Vue) {
		Vue.prototype.$doDrag = doDrag
	}
}
