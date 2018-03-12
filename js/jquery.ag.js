;(function($){
	var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	function fixHeader(){
		if($("body").hasClass("home")){
			$(window).on("scroll", function(){
				var topScroll = $(this).scrollTop();
				if(topScroll > 20){
					$(".header").addClass("fixHeader");
				}
				else{
					$(".header").removeClass("fixHeader");	
				}
			});
		}
	}

	function bannerText(){
		$(".bannerInner h2").css({opacity:0});
		$(".bannerInner h2").waypoint(function() {
            $(".bannerInner h2").css({opacity:1});
            
            TweenMax.from($(this), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '50%',
            triggerOnce: true
        });
	}

	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			var pos = parseInt($(".topNav").css("right"));
			if(pos == "-260"){
				$(".topNav").animate({
					right:0
				}, 300);
				$(this).animate({
					right:260
				}, 300);
			}
			else{
				$(".topNav").animate({
					right:-260
				}, 300);	
				$(this).animate({
					right:0
				}, 300);
			}
		});
	}

	function ourStaff(){
		$(".tabContent").eq(0).slideDown(300);
		$(".staffList li a").eq(0).addClass("activeTab");
		$(".staffList li a").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("href");
				$(".tabContent").slideUp(300);
				$(".activeTab").removeClass("activeTab");
				$(this).addClass("activeTab");
				$(target).slideDown(300);
				return false;
			});
		});
	}

	function ourStaffMobile(){
		$(".mStaffDesc").eq(0).slideDown(300);
		$(".mStaff").eq(0).addClass("activeAccord");
		$(".mStaff").each(function(){
			$(this).on("click", function(){
				var display = $(this).next(".mStaffDesc").css("display");
				$(".activeAccord").removeClass("activeAccord");
				$(".mStaffDesc").slideUp(300);
				if(display == "none"){
					$(this).next(".mStaffDesc").slideDown(300);
					$(this).addClass("activeAccord");
				}
				else{
					$(this).next(".mStaffDesc").slideUp(300);
					$(this).removeClass("activeAccord");
				}
				
				
				return false;
			});
		});
	}


	$(function(){
		if(!device){
			bannerText();
		}
		fixHeader();
		mobileNav();
		ourStaff();
		ourStaffMobile();
		
	});

})(jQuery);




