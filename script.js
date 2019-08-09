function shortpaylink(){
var cstn = document.getElementById('cstn').value;
var am = document.getElementById('am').value;
var prdt = document.getElementById('prdt').value;
var prdl = document.getElementById('prdl').value;
var tn = document.getElementById('tn').value;

document.getElementById('displayspl').innerHTML = "<a href=&quot;https://siradhana.com/pay/?cstn="+cstn+"&am="+am+"&prdt="+prdt+"&prdl="+prdl+"&tn="+tn+"&quot; target='_blank'>Short Pay Link</a>";

}
