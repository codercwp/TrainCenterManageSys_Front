//  根据“审批结果”的状态来展现
$(function () {
    // 获取状态status 


    var url = window.location.href;
    console.log(url)
    console.log(url.charAt(url.length - 1))
    var status = url.charAt(url.length - 1)
    if (status == 0) {
        $(".hty_ok").show()
    } else {
        $(".hty_no").show()
    }

})