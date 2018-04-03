----------------------
#Get the yesterdayDate
----------------------
function getYesterdaysDate(date) {
    var yesterday = new Date((new Date(date)).valueOf() - 1000*60*60*24);
    return yesterday.getFullYear()  + '-' + (yesterday.getMonth()+1) + '-' + yesterday.getDate();
}

-----------------------
#Get The updateFileList
-----------------------
function updateFileList() {
	 var input = document.getElementById('files');
	 var output = document.getElementById('fileList');
	
	 output.innerHTML = '<p>';
	 for (var i = 0; i < input.files.length; ++i) {
	   output.innerHTML += '<span>' + input.files.item(i).name + '</span>' + '</br>';
	 }
	 output.innerHTML += '</p>';
}

