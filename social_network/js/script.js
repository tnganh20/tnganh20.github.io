var user={Firstname:"",Lastname:"",Email:"",Password:"",Gender:"",Age:18,About:"",Detailinfo:"",Address:"",Avatar:"",Images:""};
var comment={user:user, comment:"", like:1,favorite:1};
function storeL(List){
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('List',JSON.stringify(List));
    } else {
        alert('Sorry! No Web Storage support..');
    }
}
var List=[];
try{
    List=JSON.parse(localStorage.getItem('List'))||[];
}
catch (error) {
    List=[];
    console.log("error");
}
function storeN(index) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('index',JSON.stringify(index));
    } else {
        alert('Sorry! No Web Storage support..');
    }
}
var index=-1;
try{
    index=JSON.parse(localStorage.getItem('index'));
}
catch (error) {
    index=-1;
    console.log("error");
}
function storeC(ListC){
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('ListC',JSON.stringify(ListC));
    } else {
        alert('Sorry! No Web Storage support..');
    }
}
var ListC=[];
try{
    ListC=JSON.parse(localStorage.getItem('ListC'))||[];
}
catch (error) {
    ListC=[];
    console.log("error");
}
function storeS(ListS){
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('ListS',JSON.stringify(ListS));
    } else {
        alert('Sorry! No Web Storage support..');
    }
}
var ListS=[];
try{
    ListS=JSON.parse(localStorage.getItem('ListS'))||[];
}
catch (error) {
    ListS = [];
    console.log("error");
}
function register(){
    var flag=true;
    for(var i=0;i<List.length;i++){
        if($('#email').val()==List[i].Email){
            alert("Tài khoản đã tồn tại !");
            flag=false;
        }
    }
    if($('#firstname').val().trim()==''||$('#lastname').val().trim()==''){
        alert("Chưa nhập tên!");
        flag=false;
    }
    else if($('#firstname').val().match(/[A-Z]/)==null||$('#lastname').val().match(/[A-Z]/)==null){
        alert("Tên không hợp lệ!");
        flag=false;
    }
    else if($('#email').val().match(/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z0-9.-]+$/i)==null){
        alert("Email không hợp lệ!");
        flag=false;
    }
    else if($('#email').val()!=$('#Re-email').val()){
        alert("Email không khớp nhau!");
        flag=false;
    }
    else if($('#passwordregis').val().trim()==''){
        alert("Chưa nhập mật khẩu!")
        flag=false;
    }
    else if($('#passwordregis').val()!=$('#re-password').val()){
        alert("Mật khẩu không khớp nhau!");
        flag=false;
    }

    if(flag!=false){
        user.Firstname=$('#firstname').val();
        user.Lastname=$('#lastname').val();
        user.Email=$('#email').val();
        user.Password=$('#passwordregis').val();
        var sex = document.getElementsByName('gender');
        for(var i = 0; i < sex.length; i++){
            if(sex[i].checked){
                user.Gender = sex[i].value;
            }
        }
        List.push(user);
        storeL(List);
        alert('Đăng ký thành công !');
        window.location.href="../Regis-login/Regis-Login.html";
    }
}
function checklogin(){
    var flag=false;
    if(List.length==0){
        console.log("Chưa có tk");
    }
    for(var i=0;i<List.length;i++){
        if($('#username').val()==List[i].Email&&$('#password').val()==List[i].Password){
            index=i;
            flag=true;
            storeN(index);
            window.location.href="../home/home.html";
        }
    }
    if(flag==false){
        alert("Sai thông tin đăng nhập");
    }
}
function checkkeycode(e){
    var event = window.event || e;
    if(event.keyCode==13&&$('#password').val().trim()!=''){
        checklogin();
    }
}
function changeinfomation() {
    var modal= $('#modaledit');
    modal.modal('show');
    $('#btnedit').off('click');
    $('#btnedit').on('click',function () {
        if($('#fname').val().trim()==""||$('#lname').val().trim()==""){
            alert("Tên không được để trống!");
        }
        else if($('#fname').val().match(/[A-Z]/)==null||$('#lname').val().match(/[A-Z]/)==null){
            alert("Tên không hợp lệ!");
        }
        else if($('#address').val().trim()==""){
            alert("Địa chỉ không được để trống!")
        }
        else if($('#age').val().match(/[0-9]/)==null||parseInt($('#age').val())<0||parseInt($('#age').val())>80){
            alert("Tuổi không hợp lệ!")
        }
        else{
            List[index].Firstname=$('#fname').val();
            List[index].Lastname=$('#lname').val();
            List[index].Age=parseInt($('#age').val());
            List[index].Address=$('#address').val();
            List[index].About=$('#About').val();
            List[index].Detailinfo=$('#detail').val();
            List[index].Avatar=$('#avatar').val();
        }
        storeL(List);
        alert("Sửa thông tin thành công");
        window.location.href="../aboutme/myprofile.html";
    })
}
function comt(){
    comment.user=List[index];
    comment.comment=$('.postComment').val();
    ListC.push(comment);
    storeC(ListC);
}
function updatestt(){
    var pic=$('postarea').val();
    var stt='<div class="tl-box"> <div class="articlebox"> <div class="ab-title"> <div class="userIcon"> <a href="../Personal/PersonalView.html"><img class="im" src="'+List[index].Avatar+'" height="1024" width="768" alt="user image"></a> </div> <div class="userName"><a href="../Personal/PersonalView.html"><p class="ten">'+List[index].Firstname+" "+List[index].Lastname+'</p></a></div> <div class="postLocation"><p class="dc">'+List[index].Address+'</p></div> <div class="postTypeATime"> <i class="type fa fa-camera"></i> <p class="time">12m ago</p> </div> </div> <div class="ab-content"> <div class="ab-imageBox"> <img src="'+pic+'" height="500" width="3264" alt="capital"> </div> </div> <div class="ab-menu"> <ul> <li> <a href="#"> <p>Like<span class="count">0</span></p> <div class="collection sorted-list" id="like"></div> </a> </li> <li> <a href="#"> <p>Favorite<span class="count">0</span></p> <div class="collection sorted-list" id="favorite"></div> </a> </li> <li> <a href="#"> <p>Comment<span class="count">0</span></p> <div class="collection sorted-list" id="comment"></div> </a> </li> </ul> </div> <div class="ab-comment"> <textarea class="postComment" id="postComment1"placeholder="write something"></textarea> </div> </div> </div>';
    ListS.push(stt);
    storeS(ListS);
    for(var i=0;i<storeS.length;i++){
        $('.timeline').append(ListS[i]);
    }
}
$( function() {
    updatestt();
});