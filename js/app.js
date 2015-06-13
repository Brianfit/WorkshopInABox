$(document).ready(function(){ init() })

var public_spreadsheet_url ='https://docs.google.com/spreadsheets/d/153rVXCt4nlQn8Fj80GmWOLO5_aF4phW0MZrNIZfpUc8/pubhtml?gid=291196347&single=true'

function init() {
  Tabletop.init( { key: public_spreadsheet_url,
    callback: showInfo,
    simpleSheet: true } )
}


function showInfo(data) {
  //thing = data // if you type `thing` in the console it's now a global variable so you can see the returned objects
  $.each(data, function (i, each) {
    $('#comboBoxData').append('<li class="list-group-item">' + '<span class="list-group-item active"><h4 class="list-group-item-heading">' + each.Exercise + '</span></h4>' + '<span class="list-group-item list-group-item-info"><span class="lead">' + each.Description + '</span>' + '<span class="list-group-item"> <strong> Objective: </strong>' + each.Objective + '    '  + '<br /><strong>Format: </strong>' + each.Format  + '<br /><b>Slides: </b> ' + 
      each.Slides + '<br />' + '<b>Length:</b> ' + each.Length + '<br />' + '<b>Stimulus:</b> ' + 
      each.Stimulus + '<br />' + '<b>Subject1:</b> ' + each.Subject1 + '<br />' + '<b>Subject2:</b> ' + each.Subject2 + '<strong><br />Notes:</strong> ' + each.Notes + '<br /></span></li>')
  })

  $('#comboBox').bind('keydown keypress keyup change', function() {
    var search = this.value.toLowerCase()
    var $li = $("#comboBoxData li").hide()
    $li.filter(function() {
      return $(this).text().toLowerCase().indexOf(search) >= 0
    }).show()
  })
}

// {"Exercise":"\"Not a Lion\" aka Picasso/ Michelangelo/ Sacrifice","Description":"Looking at a wall filled with images of greenpeace's history, take down any which are not communicating courage. ","Objective":"Comprehension","Notes":"This exercise should help to show that courage is a crucial part of Greenpeace's DNA - where have we deviated from that in the past?","Slides":"","Format":"plenary","Length":"","Stimulus":"historical images/campaigns etc","Subject1":"courage","Subject2":""}