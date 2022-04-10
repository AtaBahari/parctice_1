
function ConvertNumberToPersion() {
    persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
    function traverse(el) {
        if (el.nodeType == 3) {
            var list = el.data.match(/[0-9]/g);
            if (list != null && list.length != 0) {
                for (var i = 0; i < list.length; i++)
                    el.data = el.data.replace(list[i], persian[list[i]]);
            }
        }
        for (var i = 0; i < el.childNodes.length; i++) {
            traverse(el.childNodes[i]);
        }
    }
    traverse(document.body);
}





$(document).ready(function () {
var xValues = [100,200,300,400,500,600,700,800,900,1000];
labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
new Chart("myChart", {
type: "line",
data: {
  
    font: {

        family: 'Vazir'

      },

  labels: xValues,
  datasets: [{ 
    label: 'درآمد',
    data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
    borderColor: "red",
    fill: false
  }, { 
    label: 'هزینه',
    data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
    borderColor: "green",
    fill: false
  }]
},
options: {
  legend: {display: true}
}
});

});



// Number to Persian String //
onload = function () {
  var e = document.getElementById('amount');
  e.oninput = myHandler;
  e.onpropertychange = e.oninput; // for IE8
  function myHandler() {
      document.getElementById('amountString').innerHTML = e.value.toPersianLetter();
  }
};
// Number to Persian String //




function costDay () {
  let day_selected = 01; // current day
  let option = '';
  option = '<option>روز</option>'; // first option

  for (let i = 1; i < 32; i++) {
      // value day number with 0. 01 02 03 04..
      let day = (i <= 9) ? '0' + i : i;

      // or value day number 1 2 3 4..
      // let day = i;

      let selected = (i === day_selected ? ' selected' : '');
      option += '<option value="' + day + '"' + selected + '>' + day + '</option>';
  }
  document.getElementById("costDay").innerHTML = option;
};


function costMonth () {
  let months = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
  var month_selected = 00 // current month
  var option = '';
  option = '<option>ماه</option>'; // first option

  for (let i = 0; i < months.length; i++) {
      let month_number = (i + 1);

      // value month number with 0. [01 02 03 04..]
      let month = (month_number <= 9) ? '0' + month_number : month_number;

      // or value month number. [1 2 3 4..]
      // let month = month_number;

      // or value month names. [January February]
      // let month = months[i];

      let selected = (i === month_selected ? ' selected' : '');
      option += '<option value="' + month + '"' + selected + '>' + months[i] + '</option>';
  }
  document.getElementById("costMonth").innerHTML = option;
};


function clearAllInput(){
  $("input[type=text],textarea,input[type=email]").val('');

};

$(document).ready(function () {

  ConvertNumberToPersion();
  costDay();
  costMonth();
  clearAllInput();


});



