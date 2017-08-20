$(document).ready(function(){
    $('#search').keyup(function(){
       var searchField=$('#search').val();
       var checkBox=[];
       $("input:checkbox:checked").each(function (i) {
           checkBox[i]=$(this).val();
       });
        var myExp = new RegExp(searchField,"i");
        $.getJSON('goods.json',function(data){
           var output = '<ul>';
               $.each(data,function(key,val){
                   if(val.brand.search(myExp)!= -1) {
                       if($.inArray(val.type,checkBox)!=-1) {
                           output += `<li><h2>${val.brand} ${val.model}</h2><img src="images/${val.model}.jpg" data-target="#myModal" class="image" name="${val.brand}" alt="${val.brand}" tmp="${val.descr}"/></li>`
                       }
                   }
               });
           output+='</ul>';
            $('#update').html(output);
        });
    });
    $('#update').on('click','img',function () {
        var img = $(this);
        var name=`${img.attr('name')} ${img.attr('alt')}`;
        $('.modal-title').html(name);
        var output=`<div style="float: left">${img.attr('tmp')}</div><img src="${img.attr('src')}">`;
        $('.modal-body').html(output);
        $('#myModal').modal('show');
    });
    $('.close').click(function () {
        $('#myModal').modal('hide');
    });
    window.onclick=function (event) {
    if(event.target==$('#myModal'))
    {
        $('#myModal').modal('hide');
    }
    }
});