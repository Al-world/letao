

$(function(){
    var currentpage = 1;
    var pagesize = 5;
    render()
   function render(){
    $.ajax({
        type:"get",
        url:"/category/querySecondCategoryPaging",
        data:{
            page:currentpage,
            pageSize:pagesize,
        },
        dataType:"json",
        success:function(info){
            console.log(info)
            var htmlstr = template("setpl" , info)
            $("tbody").html(htmlstr)
            $('#paginator').bootstrapPaginator({
               bootstrapMajorVersion: 3,  // 版本号

               currentPage: info.page,  // 当前页

               totalPages: Math.ceil( info.total / info.size ), // 总页数
               
               onPageClicked: function( a, b, c, page ) {
                 // 更新当前页
                 currentpage = page;
                 // 重新渲染
                 render();
               }
              })
        }
    })
   }

   $('#addBtn').click(function() {
    $('#addModal').modal("show");

    $.ajax({
        type:"get",
        url:"/category/queryTopCategoryPaging",
        data:{
            page: 1,
            pageSize: 100
        },
        dataType:"json",
        success:function(info){
          console.log(info)
          var htmlstr = template("dropdown-menu" , info)
          $(".dropdown-menu").html(htmlstr)
        }
    })
   })

   $('.dropdown-menu').on("click", "a", function() {

    // 获取自己的文本
    var txt = $(this).text();
    // 设置给按钮
    $('#dropdownText').text( txt );
  });


  $('#fileupload').fileupload({
    dataType: "json",
    // 文件上传完成的回调函数
    done: function( e, data ) {
      console.log( data );
      var picUrl = data.result.picAddr; // 获取地址
      $('#imgBox img').attr("src", picUrl);
    }
  })
})