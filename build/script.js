$(function(){$("button").on("click",function(a){a.preventDefault();var s=$(".search-bar").val(),e="";console.log(s),$("header").addClass("results-header"),$(".photo-grid").empty(),$.ajax({dataType:"jsonp",method:"GET",url:"https://api.instagram.com/v1/tags/"+s+"/media/recent?count=12&client_id=b8586475183a4ad89a5a0ebd4a36fbc2"}).done(function(a){console.log(a),$.each(a.data,function(a,s){e+="<li>",e+='<div class="item-cont"><a href="'+s.link+'">',e+='<img src="'+s.images.standard_resolution.url+'"></a>',e+='<div class="transparent">',e+='<img src="'+s.user.profile_picture+'" class="user-pic" />',e+='<div class="social-info"><span class="user-name">'+s.user.username+"</span>",e+='<span><i class="fa fa-comments"></i>'+s.comments.count,e+='<i class="fa fa-heart"></i>'+s.likes.count+"</span>",e+="</div></div></div></li>",console.log(e)}),$(".photo-grid").append(e)})})});