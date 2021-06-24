function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
$(document).ready(function(){
    $('#save_book').on('click',function(){

        const csrf_data = getCookie('csrftoken')

        var name = $('#book_name').val();
        var price = $('#price').val();
        var pages = $('#pages').val();
        var description = $('#description').val();
        // console.log(csrf_data);
        $.ajax({
            headers: {'X-CSRFToken': csrf_data},
            url:'add_book',
            type:'post',
            data:{name:name,price:price,pages:pages,description:description},
            async:false,
            success: function(data,status){
                console.log(data);
                console.log(status);
            }
        });
    })
})