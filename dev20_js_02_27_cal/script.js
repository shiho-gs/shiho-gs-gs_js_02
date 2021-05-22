var today = new Date();

var year  = today.getFullYear();
var month = today.getMonth() + 3;


$('.date-head').html(year + "-" + month);

var last = new Date(today.getFullYear(), today.getMonth() + 3, 0);
var last_year  = last.getFullYear();
var last_month = last.getMonth();
var last_day   = last.getDate();

for (var i=1; i<=last_day; i++) {
    var week = new Date(last_year, last_month, i).getDay();
    if (!week || i == 1) {
        $('table').find('tbody').append('<tr>'+
                                                        '<td></td>' +
                                                        '<td></td>' +
                                                        '<td></td>' +
                                                        '<td></td>' +
                                                        '<td></td>' +
                                                        '<td></td>' +
                                                        '<td></td>' +
                                                    '</tr>');
                }
                $('table').find('tbody').find('tr').last().find('td').eq(week).html(i);
            }