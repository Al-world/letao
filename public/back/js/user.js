
$(function(){

  var currentId
  var isDelete
  var currentPage = 1
  var pageSize = 5;
  render() 
  function render(){
    $.ajax({
        type:"get",
        url:"/user/queryUser",
        data:{
            page:currentPage,
            pageSize:pageSize
        },
        dataType:"json",
        success:function(info){
            console.log(info)
            var htmlstr = template("usertpl" , info)
            $("tbody").html(htmlstr)
            
            $('#paginator').bootstrapPaginator({
                
                bootstrapMajorVersion: 3,
                
                currentPage: info.page,
                
                totalPages: Math.ceil( info.total / info.size ),
                 
                onPageClicked: function( a, b, c, page ) {
                
                  currentPage = page;
                  
                  render();
                }
              })
        }
    })
  }


  $("tbody").on("click" , ".btn" , function(){
    $('#userModal').modal("show");

    currentId = $(this).parent().data("id");

    isDelete = $(this).hasClass("btn-danger") ? 0 : 1;
  })

  $("#submitBtn").click(function(){
      $.ajax({
          type:"post",
          url:"/user/updateUser",
          data:{
              id:currentId,
              isDelete:isDelete
          },
          dataType:"json",
          success:function(info){
             if(info.success){
                $('#userModal').modal("hide");
                // 重新渲染页面
                render();
             }
          }
      })
  })
})