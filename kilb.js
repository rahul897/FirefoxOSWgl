$(document).ready(
function gettime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
var k,l;
$('#fo').click(function(){
	$('.sempo').slideUp('slow');
	$('.ap').hide();	
});

k=Math.floor(m/10);
l= Number(k).toString(2);
if(k<2)l='0'+'0'+'0'+l;
else if(k<4)l='0'+'0'+l;
else if(k<8)l='0'+l;
if(l[0]==='1')
	$('.mn1').addClass("red");
else $('.mn1').removeClass("red");
if(l[1]==='1')
	$('.mn2').addClass("red");
else $('.mn2').removeClass("red");
if(l[2]==='1')
	$('.mn3').addClass("red");
else $('.mn3').removeClass("red");
if(l[3]==='1')
	$('.mn4').addClass("red");
else $('.mn4').removeClass("red");
k=m%10;
l= Number(k).toString(2);
if(k<2)l='0'+'0'+'0'+l;
else if(k<4)l='0'+'0'+l;
else if(k<8)l='0'+l;
if(l[0]==='1')
	$('.mn5').addClass("red");
else $('.mn5').removeClass("red");
if(l[1]==='1')
	$('.mn6').addClass("red");
else $('.mn6').removeClass("red");
if(l[2]==='1')
	$('.mn7').addClass("red");
else $('.mn7').removeClass("red");
if(l[3]==='1')
	$('.mn8').addClass("red");
else $('.mn8').removeClass("red");



k=Math.floor(s/10);
l= Number(k).toString(2);
if(k<2)l='0'+'0'+'0'+l;
else if(k<4)l='0'+'0'+l;
else if(k<8)l='0'+l;
if(l[0]==='1')
	$('.ss1').addClass("red");
else $('.ss1').removeClass("red");
if(l[1]==='1')
	$('.ss2').addClass("red");
else $('.ss2').removeClass("red");
if(l[2]==='1')
	$('.ss3').addClass("red");
else $('.ss3').removeClass("red");
if(l[3]==='1')
	$('.ss4').addClass("red");
else $('.ss4').removeClass("red");
k=s%10;
l= Number(k).toString(2);
if(k<2)l='0'+'0'+'0'+l;
else if(k<4)l='0'+'0'+l;
else if(k<8)l='0'+l;
if(l[0]==='1')
	$('.ss5').addClass("red");
else $('.ss5').removeClass("red");
if(l[1]==='1')
	$('.ss6').addClass("red");
else $('.ss6').removeClass("red");
if(l[2]==='1')
	$('.ss7').addClass("red");
else $('.ss7').removeClass("red");
if(l[3]==='1')
	$('.ss8').addClass("red");
else $('.ss8').removeClass("red");

$('.bk').click(function(){
	$(".sempo").show('slow');
});

$('#tw').click(function(){
	$('.sempo').slideUp('slow');
	$('.hr1').hide();
	if(h>12)
		{$('.ap').addClass("red");h=-12;}
	else $('.ap').removeClass("red");
});

k=Math.floor(h/10);
l= Number(k).toString(2);
if(l[0]==='1')
	$('.hr2').removeClass("red");
else $('.hr2').removeClass("red");
if(k===2)
	$('.hr1').addClass("red");
else $('.hr1').removeClass("red");
k=h%10;
l= Number(k).toString(2);
if(k<2)l='0'+'0'+'0'+l;
else if(k<4)l='0'+'0'+l;
else if(k<8)l='0'+l;

if(l[0]==='1')
	$('.hr3').addClass("red");
else $('.hr3').removeClass("red");
if(l[1]==='1')
	$('.hr4').addClass("red");
else $('.hr4').removeClass("red");
if(l[2]==='1')
	$('.hr5').addClass("red");
else $('.hr5').removeClass("red");
if(l[3]==='1')
	$('.hr6').addClass("red");
else $('.hr6').removeClass("red");

t=setTimeout(function(){gettime()},500);
});
