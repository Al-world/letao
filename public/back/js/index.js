$(function(){



        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.querySelector(".echarts_left"));
        var myChart1 = echarts.init(document.querySelector(".echarts_right"));
    //    alert(1)
        // 指定图表的配置项和数据
        var option1 = {
          title: {
            text: '2019年注册人数'
          },
          tooltip: {},
          legend: {
            data:['销量']
          },
          xAxis: {
            data: ["一月","二月","三月","四月","五月","六月"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };
      
        var option2 = {
            title : {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['耐克','安踏','阿迪','匡威','人本']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'耐克'},
                        {value:310, name:'安踏'},
                        {value:234, name:'阿迪'},
                        {value:135, name:'匡威'},
                        {value:1548, name:'人本'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option1);
        myChart1.setOption(option2);
})