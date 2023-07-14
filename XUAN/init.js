/**
*根据id获取元素对象
*/
function $(id){
	return document.getElementById(id);	
}

/**
*打印
*/
function print(string,viewId){
    $(viewId).innerHTML = $(viewId).innerHTML + string;
}

/**
*换行打印
*/
function println(string,viewId){
    $(viewId).innerHTML = $(viewId).innerHTML + string +"<br>";
}

function changeInputValue(){
    $("inputText").innerHTML = $("input").value;
}

function inputDone(){
    $("inputText").id = "fakeInput";
    $("input").remove();
}

/**
 * 输入
 */
function input(){
    var result;
    var state = false;
    var ae = document.createElement("a");
    ae.id = "inputText"
    document.view1.prepend(ae);
    var inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.id = "input";
    inputElement.value = "123";
    inputElement.oninput = function(){
        changeInputValue();
    }
    inputElement.addEventListener("keyup",function(event){
        var keyCode = event.keyCode || event.which;
        var enterKey = "Enter";
        if (keyCode === 13 || event.key === enterKey){
            result = $("input").value;
            inputDone();
        }
    })
    document.body.prepend(inputElement);
    //while(state===true){
     //   return new Promise((resolve) => resolve(result));
    //}
}

//function sleep(ms) {
 //   const startTime = new Date().getTime();
 //   while (new Date().getTime() - startTime < ms) {}
//}


/**
 * 睡眠，单位毫秒
 */
function sleep(time){
    return new Promise((resolve) => setTimeout(resolve, time));
   }



function type(string, delayTime, viewId) {
    return new Promise((resolve) => {
      let index = 0;
      const outputDiv = document.getElementById(viewId);
      function typeWriter() {
        if (index < string.length) {
          outputDiv.innerHTML += string.charAt(index);
          index++;
          setTimeout(typeWriter, delayTime);
        } else {
          resolve(); // 当逐字输出完成时，解析Promise
        }
      }
      typeWriter();
    });
}