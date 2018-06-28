------------------------------------------------------
#Input textArea enter Handling while Entering into DB 
------------------------------------------------------

var str = document.getElementById("textarea").value;
    str = str.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    document.getElementById("textarea").value = str;

------------------------------------------------------
#Input textArea enter Handling while Extracting from DB 
------------------------------------------------------
var str = document.getElementById("textarea").value;
    str = str.replaceAll("<br/>", "\r\n");
    document.getElementById("textarea").value = str;

------------------------------------------------------
# PruneStrign OverFlow
------------------------------------------------------
    function fnPruneStringOverflow(width){
	
	var wrapperWidth = width;
	var $ownerList = $($('#adOwnerList').find('label'));

	$ownerList.each(function(idx,line){
		var inputId = line.htmlFor;
		var ownerText = line.innerText;
		var ownerTextLength = $.fn.textWidth(ownerText);

		if(ownerTextLength >= wrapperWidth){
			var wordWidth = ownerTextLength / ownerText.length;
			ownerText = ownerText.substring(0,Math.floor(wrapperWidth/wordWidth)) +'...';
		}

		console.log(ownerText);

	});

	$.fn.textWidth = function(text){
		  var org = $(this)
		  var html = $('<span style="postion:absolute;width:auto;left:-9999px">' + (text || org.html()) + '</span>');
		  if (!text) {
		    html.css("font-family", org.css("font-family"));
		    html.css("font-size", org.css("font-size"));
		  }
		  $('body').append(html);
		  var width = html.width();
		  html.remove();
		  return width;
	}

}

------------------------------------------
