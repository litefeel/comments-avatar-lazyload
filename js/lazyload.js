jQuery(function(d){var c=d("#comments");if(c.length===0){c=d("#commentlist")}if(c.length===0){c=d(".commentlist")}var e=c.parent();var b=d("img.comments-avatar-lazyload");var a=function(){var f=d(window).height()+d(window).scrollTop();b.each(function(){if(f>d(this).offset().top){d(this).trigger("appear");b=b.not(this)}});if(b.length===0){d(window).unbind("scroll",a);d(window).unbind("resize",a);e.unbind("click",a)}};b.each(function(){d(this).one("appear",function(){d(this).attr("src",d(this).attr("alt"))})});if(b.length===0){return}d(window).bind("scroll",a);d(c).bind("resize",a);e.bind("click",a);a()});