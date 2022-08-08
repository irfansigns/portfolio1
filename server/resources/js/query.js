$(function(){
    // alert("Settings page was loaded");
    $(document).on('click','#cart',function(e){
     
      
      var id = $(this).find('input').val();
    
      // console.log(data);
      $.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
      });
      
      $.get({
          url:'/product/addCart/'+id,
           // data:{id:id}, not sending params as laravel requirements
          //  dataType:'json', will be used if json response from controller
          success:function(response){
              $("#carte").html(' ' +'(' + response + ')');
          }
      });
  });
});