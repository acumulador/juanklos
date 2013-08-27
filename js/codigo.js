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
		});

		$("#sel-menu").animate({
			left: 60
		});
		swM = 1;
	}
	else
	{
		$("#social").animate({
			left: -60
		});

		$("#sel-menu").animate({
			left: 5
		});
		swM = 0;
	}
}