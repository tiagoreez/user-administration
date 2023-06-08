$('#add_user').submit(function (event) {
  alert('User Created successfully')
})

$('#update_user').submit(function (event) {
  event.preventDefault()
  const unindexedArray = $(this).serializeArray()
  const data = {}
  $.map(unindexedArray, function (n, i) {
    data[n.name] = n.value
  })
  const request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: 'patch',
    data
  }
  $.ajax(request).done((response) => {
    alert('The user was updated Successfully')
  })
})

if (window.location.pathname == '/') {
  $onDelete = $('.table tbody td a.delete')
  $onDelete.click(function () {
    const id = $(this).attr('data-id')
    const request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: 'DELETE'
    }

    if (confirm('Do you want to delete this User???')) {
      $.ajax(request).done((response) => {
        alert('Data Deleted successfully')
        location.reload()
      })
    }
  })
}
