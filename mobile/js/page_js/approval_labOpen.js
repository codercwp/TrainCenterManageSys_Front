$(function(){

    // 点击“审批不通过”按钮：蒙版+审批意见 显现
    $(".no_app").click(function(){
        $(".pop").show()
        $("#no_dialog").show()
    })

    // ”审批不通过“弹出框:点击“取消”按钮
    $(".no_cancel_btn").click(function(){
        $(".pop").hide()
        $("#no_dialog").hide()
    })
    // 设定一个判断值,1为通过，2为不通过
    var app_status =0
     // ”审批不通过“弹出框:点击“确定”按钮
     $(".no_ok_btn").click(function(){
         if($("#suggest").val() ==""){
             alert("审批意见为空噢~~~请输入")
             
         }
         else{
             $(".pop").hide()
        $("#no_dialog").hide()
         }
        app_status=2
    })
    

 // 点击“审批通过”按钮：蒙版+审批意见 显现
 $(".ok_app").click(function(){
    $(".pop").show()
    $("#ok_dialog").show()
})


  // ”审批通过“弹出框:点击“确定”按钮
  $(".ok_btn").click(function(){
   $(".pop").hide()
   $("#ok_dialog").hide()
   app_status =1
   
})

// 点击”历史“按钮
$(".hty_btn").click(function(){
    $(".table_time").show()
    $(".table_no").hide()
    $(".app_choice_btn").hide()
    // 历史中 --->进行判断展示通过或者不通过,1为通过，2为不通过
    if(app_status==1){
        $(".hty_ok").show()
    }
    if(app_status==2){
        $(".hty_no").show()
        $(".no_result textarea").val($("#suggest").val() )

    }
})

// 点击”审批“按钮
$(".applab_btn").click(function(){
    $(".app_choice_btn").show()
    $(".table_no").show()
    $(".hty_ok").hide()
    $(".hty_no").hide()
    $(".table_time").hide()
})


})