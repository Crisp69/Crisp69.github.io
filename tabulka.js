<script>
  var myArray = [
      {'name':' ', 'body':'', 'goly':'', 'asists':''},
      {'name':'', 'body':'', 'goly':'', 'asists':''},
      {'name':'', 'body':'', 'goly':'', 'asists':''},
      {'name':'', 'body' :'', 'goly':'', 'asists':''},
      {'name':'', 'body':'',  'goly':'', 'asists':''},
      {'name':'', 'body':'', 'goly':'', 'asists':''},
      {'name':'', 'body':'', 'goly':'', 'asists':''},
      {'name':'', 'body':'', 'goly':'', 'asists':''},
      {'name':'', 'body':'', 'goly':'', 'asists':''},
      {'name':'', 'body':'', 'goly':'', 'asists':''},
  
  ]

  $('th').on('click', function(){
    var column = $(this).data('column')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1)

    if(order == 'desc'){
      $(this).data('order', "asc")
      myArray = myArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
      text += '&#9660'

    }else{
      $(this).data('order', "desc")
      myArray = myArray.sort((a,b) => a[column] < b[column] ? 1 : -1)
      text += '&#9650'

    }
    $(this).html(text)
    buildTable(myArray)
  })

  buildTable(myArray)

  function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
      var row = `<tr>
              <td >${data[i].name}</td>
              <td >${data[i].body}</td>
              <td >${data[i].goly}</td>
              <td >${data[i].asists}</td>
            </tr>`
      table.innerHTML += row


    }
  }

</script>