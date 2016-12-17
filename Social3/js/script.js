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
    if($('#male').checked){
        user.Gender='Male';
    }
    else if($('#female').checked){
        user.Gender='Female';
    }
        List.push(user);
        storeL(List);
    alert('Đăng ký thành công !');
    }
        window.location.href="../Regis-login/Regis-Login.html";
}
function checklogin(){
    if(List.length==0){
        console.log("Chưa có tk");
    }
    for(var i=0;i<List.length;i++){
        var flag=false;
        if($('#username').val()==List[i].Email&&$('#password').val()==List[i].Password){
            index=i;
            storeN(index);
            window.location.href="../home/home.html";
            flag=true;
        }
    }
    if(flag!=true){
            alert("Sai thông tin đăng nhập");
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
        window.location.href="../Personal/PersonalView.html";
    })
}
function comt(){
    comment.user=List[index];
    comment.comment=$('.postComment').val();
    ListC.push(comment);
    storeC(ListC);
}
function updatestt(){
    var stt='<div class="tl-box"> <div class="articlebox"> <div class="ab-title"> <div class="userIcon"> <img class="im" src="me.jpg" height="1024" width="768" alt="user image"> </div> <div class="userName"><p class="ten">Nichkhun</p></div> <div class="postLocation"><p class="dc">Bangkok,ThaiLand</p></div> <div class="postTypeATime"> <i class="type fa fa-camera"></i> <p class="time">Just now</p> </div> </div> <div class="ab-content"> <div class="ab-imageBox"> <img src='+$("#postarea").val()+' height="500" width="3264" alt="capital"> </div> </div> <div class="ab-menu"> <ul> <li> <a href="#"> <p>Like<span class="count">0</span></p> <div class="collection sorted-list" id="like"></div> </a> </li> <li> <a href="#"> <p>Favorite<span class="count">0</span></p> <div class="collection sorted-list" id="favorite"></div> </a> </li> <li> <a href="#"> <p>Comment<span class="count">0</span></p> <div class="collection sorted-list" id="comment"></div> </a> </li> </ul> </div> <div class="ab-comment"> <textarea class="postComment" id="postComment1"placeholder="write something"></textarea> </div> </div> </div>';
    ListS.push(stt);
    storeS(ListS);
    for(var i=0;i<storeS.length;i++){
        $('.timeline').append(ListS[i]);
    }
}