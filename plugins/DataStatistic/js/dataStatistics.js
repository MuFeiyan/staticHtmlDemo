var height = $(".bottomContent").height()- $(".content-title").height();
$(".tab-content").css("height",height);
	//初始化右上部分信息
	var lineChart = echarts.init(document.getElementById('lineBox'));
	var barChart = echarts.init(document.getElementById('barBox'));
	var pieChart = echarts.init(document.getElementById('pieBox'));
	//gaugeOption
	//var gaugeChart = echarts.init(document.getElementById('gaugeBox'));
	var basePath='<%=basePath%>';
	var recordsX=new Array();
	var recordsY=new Array();
	var hdfsX=new Array();
	var hdfsY=new Array();	
	var limit=0;//标出前三名柱状图颜色
	 var optionBar = {
	            title: {
	                text: '前10名表记录数（个）',
	                right:'center',
	                textStyle : {
						color : '#787575',
						fontSize:12,
						fontWeight:'400'
					}
	            },
	             tooltip: {
	       	 		trigger: 'axis'
	    		},
	            legend: {
	                data:['表记录数'],
	                show:false
	            },
	             grid : {
					top : '10%',
					left : '7%',
					right : '7%',
					bottom : '5%',
					containLabel : true
				},
	            yAxis:{
	            	type: 'category',
			        boundaryGap: true,
					axisLine : {
						show : true,
						lineStyle:{
							color:'#ededed'
						}
						
					},
					splitLine: {
						show: false,
						lineStyle: {
						color: ['#999']
						}
					},
					axisLabel : {
						show : true,
						// rotate: 40
						margin : 6,
						textStyle : {
							color : '#999',
						    fontSize:10
						}
					},
					axisTick : {
						show : false
					},
					data: 
						["表一","表二","表三","表四","表五","表六","表七","表八","表九","表十"]
			    },
	               xAxis: {
	            	    type: 'value',
				    	name:'',
				    	nameLocation: 'end',
				    	nameTextStyle: {
				    		color : '#666',
				    		fontSize:10
				    	},
				    	nameGap: 1,
				     
				        axisLine: {
							show: false,
						},
						axisTick: {
							show: false,
						},
						axisLabel : {
							show : false,
							interval : 0,
							textStyle : {
								color : '#999',
								fontSize:10
							}
						},
						splitLine : {
							show : false,
							lineStyle : {
								type : 'dotted',
								color : 'rgba(0,0,0,.03)',
								opacity : 1
							}
						},
						splitNumber: 5,
						min:0,
				        boundaryGap: [0, '100%']
				    } ,
			  /*  dataZoom: [
				           {
				               show: true,
				               realtime: true,
				               startValue: 0,
				               endValue: null,
				               fillerColor: 'rgba(228, 205, 234,0.2)',//'rgba(241,81,81,0.6)'
				               //handleColor: 'rgba(157, 145, 230, 0.5)',
				                handleStyle: {
				                   color: '#ffffff'
				               }, 
				               bottom: '5'
				           }
				       ],*/
	            series: [{
	                    name:'表记录数',
			            type:'bar',
			            smooth:true,

			            barWidth:20,

	                    markPoint: {
	                      symbol: 'emptyCircle',
	                      symbolSize: 1
	                    },
			            sampling: 'average',
			            itemStyle: {
			                normal: {
			                    color: function(params){
			                    	if(params.dataIndex<7){
			                    		return '#427abf' ;
			                    	}else{
			                    		return '#fe7235';
			                    	}
			                    }  //#427abf a293f9
			                }
			            },
			            areaStyle: {
			                normal: {
			                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                        offset: 0,
			                        color: 'rgba(131, 158, 192,0.15)'  //   color: 'rgba(132, 119, 232,0.15)'
			                    }, {
			                        offset: 1,
			                        color: 'rgba(83, 135, 200,0.15)'   // 'rgba(228, 205, 234,0.15)'  
			                    }])
			                }
			            },
			        label: {
			                normal: {
			                    show: true,
			                    color: '#999',
			                    position: 'right',
			                    formatter:function (value, index) {
			                    	if(value.data==0){
			                    		return "";
			                    	}
			                       var s=value.data.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
			                        return s;
			                    }
			                }
			            },
	                data: ["10","12","12","13","15","18","18","19","20","20"]
	            }]
	        };
	 var optionLine = {
	            title: {
	                text: '表tbdata.wlzkhxxb记录数日趋势（万）',
	                right:'center',
	                textStyle : {
						color : '#787575',
						fontSize:12,
						fontWeight:400
					}
	            },
	             tooltip: {
	       	 		trigger: 'axis'
	    		},
	            legend: {
	                data:['表记录数'],
	                show:false
	            },
	             grid : {
					top : '15%',
					left : '3%',
					right : '5%',
					bottom : '5%',
					containLabel : true
				},
	            xAxis: {
			        type: 'category',
			        boundaryGap: false,
					axisLine : {
						show : false
					},
					splitLine: {
						show: false,
						lineStyle: {
						color: ['#999']
						}
					},
					axisLabel : {
						show : true,
						// rotate: 40
						margin : 6,
						textStyle : {
							color : '#999',
						    fontSize:10
						}
					},
					axisTick : {
						show : false
					},
					data: 
						["2017-08-31","2017-09-01","2017-09-01","2017-09-02","2017-09-03","2017-09-04","2017-09-05","2017-09-06","2017-09-07","2017-09-08","2017-09-09","2017-09-10","2017-09-11","2017-09-12","2017-09-13","2017-09-14"]
			    },
	               yAxis: {
			    	name:'',
			    	nameLocation: 'end',
			    	nameTextStyle: {
			    		color : '#666',
			    		fontSize:10
			    	},
			    	nameGap: 1,
			        type: 'value',
			        axisLine: {
						show: false,
					},
					axisTick: {
						show: false,
					},
					axisLabel : {
						show : true,
						interval : 0,
						textStyle : {
							color : '#999',
							fontSize:10
						}
					},
					splitLine : {
						show : true,
						lineStyle : {
							type : 'dotted',
							color : 'rgba(0,0,0,.03)',
							opacity : 1
						}
					},
					splitNumber: 5,
			        boundaryGap: [0, '100%']
			    },
			    /*dataZoom: [
				           {
				               show: true,
				               realtime: true,
				               startValue: 0,
				               endValue: null,
				               fillerColor: 'rgba(228, 205, 234,0.2)',//'rgba(241,81,81,0.6)'
				               //handleColor: 'rgba(157, 145, 230, 0.5)',
				                handleStyle: {
				                   color: '#ffffff'
				               }, 
				               bottom: '5'
				           }
				       ],*/
	            series: [{
	                       name:'表记录数',
			            type:'line',
			            smooth:true,
	                    markPoint: {
	                      symbol: 'emptyCircle',
	                      symbolSize: 1
	                    },
			            sampling: 'average',
			            itemStyle: {
			                normal: {
			                    color: '#427abf'
			                }
			            },
			            areaStyle: {
			                normal: {
			                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                        offset: 0,//rgba(62, 122, 191,0.15)
			                        color: 'rgba(62, 122, 191,0.15)'  //   color: 'rgba(132, 119, 232,0.15)'
			                    }, {
			                        offset: 1,
			                        color: 'rgba(256, 256, 256,0.15)'   // 'rgba(228, 205, 234,0.15)'  
			                    }])
			                }
			            },
	                data: ["12","12","12","13","15","18","18","19","21","21","21","21","21","22","22","22","22","22","22","22","22","22","22","22","22","22","23","23","23","23","23","24","24","24"]
	            }]
	        };

	 var i=0;  
	 var colors=['#fe7235','#dfe1e3'];  
	 var optionPie= {  
	 	 title: {
    text: '88%',
    x: 'center',
    y: 'center',
    textStyle: {
        color: '#333',
        fontWeight: 'bolder',
        fontSize: 14,
    }
},
	    tooltip : {  
	        trigger: 'item',  
	        formatter: "{a} <br/>{b} : {c} ({d}%)"  
	    },  
	   
	    calculable : true,  
	    series : [  
	        {  
	            name:'HDFS空间使用情况',  
	            type:'pie',  
	            radius : ['60%', '65%'],  
	            itemStyle : {  
	                normal : {  
	                    color:function(){  
	                        return colors[i++];   
	                        },  
	                    label : {  
	                        show : false  
	                    },  
	                    labelLine : {  
	                        show : false  
	                    }  
	                },  
	                emphasis : {  
	                    label : {  
	                        show : true,  
	                        position : 'center',  
	                        textStyle : {  
	                            fontSize : '15',  
	                            fontWeight : 'bold'  
	                        }  
	                    }  
	                }  
	            },  
	                data:[
	                {value:335, name:'已使用'},
	                {value:310, name:'未使用'}
	               
	            ]
	        }  
	    ]  
	};  
	 optionGauge = {
			 title: {
	                text: 'HDFS空间使用情况',
	                left:'left',
	                textStyle : {
						color : '#000',
						fontSize:13,
						fontWeight:900
					}
	            },
			    tooltip : {
			        formatter: "{a} <br/>{b} : {c}%"
			    },
			    grid : {
					top : '5%',
					left : 0,
					right : 0,
					bottom : 0,
					containLabel : true
				},
			    series : [
			        {
			            name:'业务指标',
			            type:'gauge',
			            center : ['50%', '50%'],
			            splitNumber: 5,       // 分割段数，默认为5
			            axisLine: {            // 坐标轴线
			                lineStyle: {       // 属性lineStyle控制线条样式
			                    color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']], 
			                    width: 8
			                }
			            },
			            axisTick: {            // 坐标轴小标记
			                splitNumber: 5,   // 每份split细分多少段
			                length :12,        // 属性length控制线长
			                lineStyle: {       // 属性lineStyle控制线条样式
			                    color: 'auto'
			                }
			            },
			            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
			                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
			                    color: 'auto'
			                }
			            },
			            splitLine: {           // 分隔线
			                show: true,        // 默认显示，属性show控制显示与否
			                length :30,         // 属性length控制线长
			                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
			                    color: 'auto'
			                }
			            },
			            pointer : {
			                width : 5
			            },
			            title : {
			                show : true,
			                offsetCenter: ['0%', '80%'],       // x, y，单位px
			                textStyle: { 
			                	fontSize:13,// 其余属性默认使用全局文本样式，详见TEXTSTYLE
			                    fontWeight: 'bolder'
			                }
			            },
			            detail : {
			                formatter:'{value}%',
			                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
			                    color: 'auto',
			                    fontSize:15,
			                    fontWeight: '900'
			                }
			            },
			            data:[{value: 50, 
			            	   name: '使用情况'
			            	  
			            }]
			        }
			    ]
			};

	//initPageData();
	 function getEchartsXY(list,m,n){
		 var xyObj={};
		 var name=new Array();
		 var valueSize=new Array();
		 for(var i=list.length-1;i>=0;i--){
	    		name.push(list[i].name);
	    		if(list[i].valueSize){
	    			valueSize.push((list[i].valueSize/m).toFixed(n));
	    		}else{
	    			valueSize.push(0);
	    		}
	    		
	    }
		 xyObj.name=name;
		 xyObj.valueSize=valueSize;
		 return xyObj;
	 }
	function topData(){
		$('#loading').modal('show');	
		
	/*	barChart.showLoading({
			                    text: "数据正在努力加载..."
			                });*/
	/*	lineChart.showLoading({
			                    text: "数据正在努力加载..."
			                });*/
	/*	gaugeChart.showLoading({
			                    text: "数据正在努力加载..."
			                });*/
		
	    	$.ajax({
				url: "/hisplatform/statistics/topData",
				type: "get",
				dataType: "json",
				async:false,
			    success: function (data) {
			    	 $('#loading').modal('hide');
			    	 /*window.setTimeout(function(){
			    		barChart.showLoading({
			    			                    text: "数据正在努力加载..."
			    			                });
			    	},5000) ;*/
			    	
			    	/* $('#loading').modal('hide');
				    	window.setTimeout(function(){
				    		barChart.hideLoading();
				    	},10000) ;*/
			    	if(data.statusCode=="1"){
			    		Msgshow.merror(data.message);
			    		return
			    	}
			    var data=data.data;
			    if(!data) return;
			    if(data.tableRecordsList){
			    	var xyObj=getEchartsXY(data.tableRecordsList,1000,0);
			    	recordsX=xyObj.name;
			    	recordsY=xyObj.valueSize;
			    };
			    if(data.hdfsSizesList){
			    	var xyObj=getEchartsXY(data.hdfsSizesList,1,0);
			    	hdfsX=xyObj.name;
			    	hdfsY=xyObj.valueSize;
			    };
			  //  fillBarData(1);
			    var htmlOne="";
			    var htmlTwo="";
			    if(data.scheList){
			    	data.oneLength=data.scheList.length;
			    	htmlOne = template("scheList", data);
			    	 
			    };
			    if(data.sysList){
			    	data.twoLength=data.sysList.length
			    	htmlTwo = template("sysList", data);
			    	 
			    };
			   $(".table tbody").html(htmlOne+htmlTwo);
			   $(".table td").css("border-top","1px solid #ddd")
			    },
			    error: function () {
			    }
			});
	    }
	
	function fillBarData(type){
		if(type==1){
		optionBar.title.text="前十名表记录数（万）";//'前10名表记录数（个）'
  	    optionBar.yAxis.data = recordsX;//重新赋予xAxis的data值
        optionBar.series[0].data = recordsY;//重新赋予series的data值
        limit=recordsY.length-3;
        optionBar.series[0].name='表记录数'
  	    //optionBar.yAxis.name = '万';
        if(recordsY.length>0)
        optionBar.yAxis.min=(recordsY[0]/10).toFixed(0);
        if(recordsX.length>0){
       // getBottomData(recordsX[recordsX.length-1],"1");//表记录数日趋势
        }else{
        	Msgshow.mwarning("表记录数为空");
        }
	  }else if(type==2){
		  optionBar.title.text="前十名表空间占用（M）";
		  optionBar.xAxis.data = hdfsX;//重新赋予xAxis的data值
		  optionBar.series[0].data = hdfsY;//重新赋予series的data值
	      limit=hdfsY.length-3;
		  optionBar.series[0].name='数据空间';
		  optionBar.yAxis.name = 'M';
		  optionBar.yAxis.min=0;
		  if(hdfsX.length>0){
		  getBottomData(hdfsX[hdfsX.length-1],"2");//数据空间日趋势
		  }else{
	        	Msgshow.mwarning("数据空间为空");
	        }
		  
	  }
		 barChart.hideLoading();
		 barChart.setOption(optionBar, true);  
	  }

	
	function changeSection(object,type){
    	$("#Section").find("li").removeClass("active");
    	$(object).parent().addClass("active");
    	fillBarData(type);
    }
	
	 barChart.setOption(optionBar);
	 lineChart.setOption(optionLine);
	 debugger
	 pieChart.setOption(optionPie);
	 barChart.on("click", function(params){
	
		 var type=(params.seriesName=='表记录数')?1:2;
		 getBottomData(params.name,type);
		

	 });  
	 function getBottomData(params,type){
		 var name=params.split(".");
		 var table;
		 var schema;
		 if(name.length!=2){
				Msgshow.mwarning("参数传递不符合要求"); 
				return
			 }else{
				var table=name[1];
				var schema=name[0];
			 }
		 	$.ajax({
				url: "/hisplatform/statistics/bottomData",
				type: "post",
				dataType: "json",
				data:{
					table:table,
					schema:schema,
					type:type
				},
				async:true,
			    success: function (data) {
			    	if(data.statusCode=="1"){
			    		Msgshow.merror(data.message);
			    		return
			    	}
			    	if(data.data){
			    		if(type=="1"){
			    	    var xyObj=getEchartsXY(data.data,10000,0);
			    		optionLine.series[0].data=xyObj.valueSize;
			    		optionLine.xAxis.data=xyObj.name;
			    		optionLine.title.text=params+"表记录数（万）";
			    		optionLine.series[0].name='表记录数';
			    		optionLine.yAxis.name = '万';
			   
			    	}else{
			    		    var xyObj=getEchartsXY(data.data,1,0);
			    			optionLine.series[0].data=xyObj.valueSize;
				    		optionLine.xAxis.data=xyObj.name;
				    		optionLine.title.text=params+"表空间（M）";
				    		optionLine.series[0].name='数据空间';
				    		optionLine.yAxis.name = 'M';
			    	}
			    		
			    		lineChart.hideLoading();
			    	 lineChart.setOption(optionLine, true);  
			    	// .hideLoading();
			    	// gaugeChart.setOption(optionGauge, true);  
			    	}
			    	},
			    error: function () {
			    }
			});
	 }
	//topData();
	 
	function toTabScan(sysNo){
		//var url = "/dataassets/dataopen/tabScan?sysNo="+sysNo;
		//window.open(url);
	}
	$(".dataLocation-help")
	.tooltip(
			{
				content : function() {
					// 根据 $(this) 决定提示的内容  
					// 提示纯HTML，可以自定义样式、内容等等  
					return "由于启动GDS时，设置的数据源文件存放目录为“/input_data/”，GDS监听 端口为5000，所以设置参数“gds服务器地址”为:<br>“gsfs://192.168.0.90:5000/* | gsfs:// 192.168.0.91:5000/*”"
				}
			});