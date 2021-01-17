$(document).ready(function () {
            $('#clock').countdown('2020/10/10', function (event) {
                var $this = $(this).html(event.strftime(
                    '<Table style=\"width: 100%\;"\>\
                    <tr\>\
                        <td><h1>%w</h1></td\>\
                        <td><h1>%d</h1></td\>\
                        <td><h1>%H</h1></td\>\
                        <td><h1>%M</h1></td\>\
                        <td><h1>%S</h1></td\>\
                    </tr\>\
                    <tr\>\
                        <td>Weeks</td\>\
                        <td>Days</td\>\
                        <td>Hour</td\>\
                        <td>Minute</td\>\
                        <td>Sec</td\>\
                    </tr\>\
                </Table>'));
            });
        });