$(document).ready(function(){
    $('#search').keyup(function(){
       var searchField=$('#search').val();
        var myExp = new RegExp(searchField,"i");
        $.getJSON('goods.json',function(data){
           var output = '<ul>';
            $.each(data,function(key,val){
                if(val.brand.search(myExp)!= -1) {
                    output+=`<li><h2>${val.brand} #{val.model}</h2><img src="images/${val.model}.jpg" alt="${val.brand}"/></li>`
                }
            });
            output+='</ul>';
            $('#update').html(output);
        });
    });
});