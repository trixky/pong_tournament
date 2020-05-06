import {router} from "../BackboneRouter/application_router"
import {connectedMenu} from "../BackboneViews/ConnectedView"
import {socialView} from "../BackboneViews/SocialView"
import {adminContentView} from "../BackboneViews/AdminView"
import {User} from "../BackboneModel/user_model"

var getUrlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }


function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}

function tokenValidity(view)
{

	var user = new User({id: Cookies.get("login")});
	user.fetch().then((res)=>{
		if (res["error"] == "banned")
		{
			router.navigate("/banned", {trigger: true});
		}
		else if (res["error"] == "acces denied")
		{
			router.navigate("/acces_denied", {trigger: true});
		}
		else
		{
			if (view[0] != adminContentView)
			{
				connectedMenu.render();
				if ($(".title-notification").length == 0)
					socialView.render();
			}
			view.forEach((e)=>{
				e.render();
			});
		}
	})
}

export {getUrlParam, getCookie, imageExists, tokenValidity};