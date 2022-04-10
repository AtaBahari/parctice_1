
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


$(document).ready(function () {

    ConvertNumberToPersion();
});
