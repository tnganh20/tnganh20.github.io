/**
 * Created by MyPC on 10/11/2016.
 */
$( function() {
    $( ".sorted-list" ).sortable({
        connectWith: ".sorted-list",
        placeholder: "ui-state-highlight",
        start: function (event,ui) {
            $(ui.item[0]).addClass('dragging');
        },
        stop: function (event,ui) {
            $(ui.item[0]).removeClass('dragging');
        }
    });
} );
var app = {
    newjob:function (e, type, input) {
        var event = window.event || e;
        if(event.keyCode==13&&$(input).val().trim()!=''){
            this.addjob(type,$(input).val());
            $(input).val('');
        }
    },
    addjob: function (type, jobname) {
        var item='<li class="collection-item job"> '+jobname+' <a href="#!" class="secondary-content" onclick="app.removejob(this)"><i class="material-icons">delete</i></a></li>';
        $("#"+type).append(item);
    },
    removejob:function(a){
        var modal = $('#modalconfirm');
        var item=$(a).parent();
        modal.openModal();
        $('#btndelete').on('click',function () {
            item.remove();
            modal.closeModal();
        });
    }
};
var a1=$('#todo').children();
$('#count1').text(a1.length-1);
var a2=$('#doing1').children();
$('#count2').text(a2.length-1);
var a3=$('#done1').children();
$('#count3').text(a3.length-1);
