(function($){
	window.Msgshow=function(){
		var showtime;
		var position="top-left";
		return{
			msuccess:function(txt,time){//成功
					Notify(txt, position, time, 'success', 'fa-check', true);
			},
			merror:function(txt,time){//错误
					Notify(txt, position, time, 'danger', 'fa-bolt', true);
			},
			merrorPreventDuplicates:function(txt,time){//错误，不重复提示
				Notify(txt, 'top-left', time, 'danger', 'fa-bolt', true , true);
			},	
			mwarning:function(txt,time){//警告
				 	Notify(txt, position, time, 'warning', 'fa-warning', true);
			},
			mhide:function(){

			}
		}
	}();
})(jQuery);
