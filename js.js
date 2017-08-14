$(document).ready(function(){
    $('#search').keyup(function(){
       var searchField=$('#search').val();
        var myExp = new RegExp(searchField,"i");
        $.getJSON('goods.json',function(data){
           var output = '<ul>';
            $.each(data,function(key,val){
                if(val.name.search(myExp)!= -1) {
                output+='<li>';
                output+='<h2>'+val.name+'</h2>';
                output+='<img src="images/'+val.model+'.jpg" alt="'+val.name+'"/>';
                output+='</li>';
                }
            });
            output+='</ul>';
            $('#update').html(output);
        });
    });
});