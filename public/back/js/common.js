$(function(){
    $(document).ajaxStart(function() {
        // 开启进度条
        NProgress.start();
      })
      $(document).ajaxStop(function() {
        // 模拟网络延迟
        setTimeout(function() {
          // 结束进度条
          NProgress.done();
        }, 500)
      })



    $(".nav .category").click(function(){
        // alert(1)
        $(this).next().stop().slideToggle();
    })
    $(".icon_menu").click(function(){
        // alert(1)
        $(".aside").toggleClass("hidemenu");
        $(".main").toggleClass("hidemenu");
        $(".topbar").toggleClass("hidemenu");
    })

    $('.icon_logout').click(function() {
        // 让模态框显示show 隐藏 hide
        $('#logoutModal').modal("show");
      });
    $('#logoutBtn').click(function(){
        $.ajax({
            type:"get",
            url:"/employee/employeeLogout",
            dataType:"json",
            success: function( info ) {
                console.log( info );
                if ( info.success ) {
                  // 退出成功, 跳到登陆页
                  location.href = "login.html";
                }
              }
        })
    })
})