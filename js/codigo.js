$(document).on("ready",ini);
var swM = 0;
function ini()
{
	$("#sel-menu").on("click",openMenu);
}

function openMenu()
{
	if(swM == 0)
	{
		$("#social").animate({
			left: 0
		},1500, 'easeOutElastic');
		swM = 1;
	}
	else
	{
		$("#social").animate({
			left: -60
		},1500, 'easeInElastic');
		swM = 0;
	}
}