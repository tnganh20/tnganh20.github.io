/**
 * Created by MyPC on 10/11/2016.
 */
$( function() {
    column_type.forEach(function (type) {
        var columnType=list[type] || [];
        columnType.forEach(function (jobname) {
            app.addjob(type,jobname)
        })
    });
    var a1=$('#todo').children();
    $('#count1').text(a1.length-1);
    var a2=$('#doing1').children();
    $('#count2').text(a2.length-1);
    var a3=$('#done1').children();
    $('#count3').text(a3.length-1);

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
var column_type=['todo','doing1','done1'];
var DB={
    getdata:function () {
        if (typeof(Storage) !== "undefined") {
            var data;
            try{
                data=JSON.parse(localStorage.getItem('list')) || {};
            }
            catch (error) {
                data={};
            }
            return data;
        } else {
            alert('Sorry! No Web Storage support..');
            return {};
        }
    },
    setdata:function (data) {
     localStorage.setItem('list',JSON.stringify(data));
    }
}
var list=DB.getdata();
var app = {
    newjob:function (e, type, input) {
        var jobname=$(input).val();
        var event = window.event || e;
        if(event.keyCode==13&&jobname.trim()!=''){
            if(!list[type]) list[type]=[];
            list[type].push(jobname);
            DB.setdata(list);
            this.addjob(type,jobname);
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
