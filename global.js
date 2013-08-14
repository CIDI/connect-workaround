////////////////////////////////////////////////////////
//Add maxlength to Adobe Connect option in Conferences//
///////////////////////////////////////////////////////
$(document).ready(function() {
	if(window.location.href.indexOf("conferences") > 0){
		if($(".new-conference-btn").length > 0){
			$('.new-conference-btn').click(function(){
				setTimeout(function(){
					$('select>option:eq(1)').prop('selected', true);
					$("#web_conference_title").attr('maxlength','30');
					$("#web_conference_title").after('<br><small>Limit of 30 characters</small>');
					var todaysDate = new Date();
					var displayDate = todaysDate.toString('MM-dd-yyyy');
					$("#web_conference_title").val(displayDate+" Conference");
				}, 300);
			});	
		}
	});
}
