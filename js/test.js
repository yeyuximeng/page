/**
 * Created by YEYU on 2017/4/3.
 */
$(function(){
});
$(document).ready(function(){

    var testButton = $("#test");
    testButton.on("click",function(){
        var input = $(":input");
        for(var i = 0 ; i < input.length;i++){
            var value = input[i].value;
            console.log("type:"+input[i].type+",value:"+value);
        }
        var checked = $("form :checked");
        for(var i = 0 ; i<checked.length;i++){
            console.log(checked[i].value);
        }
        var option =  $("#select").find("option:selected").val();
        console.log("option的值：");
        console.log(option);
    });

    $("#range").on('input propertychange',function(){
        var w = ($("#range").val()/100+1)*2*320;
        $("#div1").css("width",w/2+'px');
        $("#div1").css("height",w/2*9/16+'px');
        $("#drag1").css("width",w/2+'px');
        $("#drag1").css("height",w/2*9/16+'px');
    });

    $("#color").on("input propertychang",function(){
        $("#div1").css("backgroundColor",$("#color").val());
    });

    myDrag = function (event){
        event.dataTransfer.setData("Text",event.target.id);
    };

    drop = function (event){
        event.preventDefault();
        var data=event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    }
    dragOver = function (event){
        event.preventDefault();
    }

    //相对路径
    $("#inputFile").on('change',function(){
        console.log($('#inputFile').val());
        var rootpath ='../imges/';
        var path = $("#inputFile").val();
        var realPath = '';
        for(var i = path.length;i>0;i--){
            if(path[i]=='\\'){
                realPath = rootpath+path.substring(i+1,path.length);
                break;
            }
        }
        var divImg = $('#file');
        var newdivImg = $('div img');
        var count = newdivImg.length;
        console.log(newdivImg);
        console.log(count);
        var idStr = 'newImg'+count;
        if(count>0){
            divImg.append('<img id='+idStr+'>');
            $('#'+idStr).attr('src',realPath);
            $('#'+idStr).css('width',320);
            $('#'+idStr).css('height',180);
            $('#'+idStr).attr('draggable',true);
            $('#'+idStr).attr('ondragstart','myDrag(event)');
            $('#'+idStr).css('display','inline-block');
        }else{
            divImg.append('<img id="newImg">');
            $('#newImg').attr('src',realPath);
            $('#newImg').css('width',320);
            $('#newImg').css('height',180);
            $('#newImg').attr('draggable',true);
            $('#newImg').attr('ondragstart','myDrag(event)');
            $('#newImg').css('display','inline-block');
        }

    });

});