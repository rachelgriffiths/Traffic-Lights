function swithSchemeRed() {
  $('body').attr('class', 'schemeRed');
}

function swithSchemeOrange() {
  $('body').attr('class', 'schemeOrange');
}

function swithSchemeGreen() {
  $('body').attr('class', 'schemeGreen');
}

$('#turnRed').click(swithSchemeRed);
$('#turnOrange').click(swithSchemeOrange);
$('#turnGreen').click(swithSchemeGreen);
