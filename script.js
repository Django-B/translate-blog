$(function(){
  text = $('#target').text()
  tooltip = ".tooltip"
  // $('.target').html(markup(text))
  $(".target").each(function(i, elem) {
    $(this).html(markup($(this).text()))
  })
  
  // $('.block').hover(
  $(".block").mousemove( display_tooltip ).mouseleave(
    function() {
      $(tooltip).hide()
    }
  )

  $(".block").click(
    function() {
      translate = prompt("Введите перевод для: "+$(this).text())
      if (translate != '') {
        $(this).attr("data", translate)
        $(tooltip).html($(this).attr('data'))
      }
    }
  )
})

function display_tooltip(cursor) {
  data = $(this).attr('data')
  $(tooltip).show()
  $(tooltip).html(data)
  $(tooltip).css("left", (cursor.pageX+10)+"px").css("top", (cursor.pageY-20)+"px")
}

function markup(text) {
  wrap1 = '<span class="block" data="Нет перевода">'
  wrap2 = '</span>'

  new_text = ''
  tempString = ''
  separators = [',', '.', ';']
  for (i=0; i<text.length; i++) {
    symbol = text[i]

    if (separators.includes(symbol)) {
      new_text += wrap1+tempString+wrap2+symbol
      tempString = ''
    }
    else {
      tempString += symbol
    }
  }
  return new_text
}
