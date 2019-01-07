

$(function(){
    var currentPage=1
    var pageSize = 5;
    render()
    function render(){
        $.ajax({
            type:"get",
            url:"/category/queryTopCategoryPaging",
            data:{
                page:currentPage,
                pageSize:pageSize,
            },
            dataType:"json",
            success:function(info){
                console.log(info)
                var htmlstr = template("fristtpl" , info)
                $("tbody").html(htmlstr)
                  $('#paginator').bootstrapPaginator({
                   // 设置bootstrap版本号
                   bootstrapMajorVersion: 3,
                   // 当前页
                   currentPage: info.page,
                
                   totalPages: Math.ceil( info.total / info.size ),
                   // 给页码添加点击事件
                   onPageClicked: function( a, b, c, page ) {
                     // page 表示点击的按钮指向的页码
                     console.log( page );
                     currentPage = page
                     render()
                   }
                  })
            }
    
        })
    }
    $('#addBtn').click(function() {
        $('#addModal').modal("show");
      });
    $('#form').bootstrapValidator({
      // 配置图标
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',    // 校验成功
        invalid: 'glyphicon glyphicon-remove',   // 校验失败
        validating: 'glyphicon glyphicon-refresh'  // 校验中
      },
      // 校验字段, 一定要先配置 input 的 name
      fields: {
        categoryName: {
          validators: {
            notEmpty: {
              message: "请输入一级分类名称"
            }
          }
        }
      }
    });

    $('#form').on("success.form.bv", function( e ) {
        e.preventDefault();
        $.ajax({
            type:"post",
            url:"/category/addTopCategory",
            data:$('#form').serialize(),
            dataType:"json",
            success:function(info){
             if(info.success){
                $('#addModal').modal("hide");

                 currentPage=1

                 render()

                 $('#form').data("bootstrapValidator").resetForm(true);
             }
            }
        })
    })
})