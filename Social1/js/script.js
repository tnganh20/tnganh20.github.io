var user={Firstname:"",Lastname:"",Email:"",Password:"",Gender:"",Age:18,About:"",Detailinfo:"",Address:"",Avatar:"",Images:""};
var comment={user:user, comment:"", like:1,favorite:1};
var list1=[];
var List=JSON.parse(localStorage.getItem('List'));
var index;
function store(List){
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('List',JSON.stringify(List));
    } else {
        alert('Sorry! No Web Storage support..');
    }
}
function register(){
    if($('#firstname').val().trim()==''||$('#lastname').val().trim()==''){
        alert("Chưa nhập tên!");
    }
    else if($('#firstname').val().match(/[A-Z]/)==null||$('#lastname').val().match(/[A-Z]/)==null){
        alert("Tên không hợp lệ!");
    }
    else if($('#email').val().match(/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z0-9.-]+$/i)==null){
        alert("Email không hợp lệ!");
    }
    else if($('#email').val()!=$('#Re-email').val()){
        alert("Email không khớp nhau!");
    }
    else if($('#passwordregis').val().trim()==''){
        alert("Chưa nhập mật khẩu!")
    }
    else if($('#passwordregis').val()!=$('#re-password').val()){
        alert("Mật khẩu không khớp nhau!");
    }
    else{
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
    list1.push(user);
    user={};
    store(list1);
    alert('Đăng ký thành công !');
    }
}
function checklogin(){
    for(var i=0;i<List.length;i++){
        if($('#username').val()==List[i].Email&&$('#password').val()==List[i].Password){
            window.location.href="../about%20me/myprofile.html";
            index=i;
        }
        else{
            alert("Sai thông tin đăng nhập !");
        }
    }
}
function changeinfomation() {
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
        List[index].Age=$('#age').val();
        List[index].Address=$('#address').val();
        List[index].About=$('#About').val();
        List[index].Detailinfo=$('#detail').val();
        List[index].Avatar=$('#avatar').val();
    }
        store(List);
        alert("Sửa thông tin thành công");
        window.location.href="../Personal/PersonalView";
}
function updateinfomation() {
    $('#name').text(List[index].Firstname + List[index].Lastname+","+List[index].Age);
    $('#addressP').text(List[index].Address);
    $('.big').attr('src',List[index].Avatar);
    $('.small').attr('src',List[index].Avatar);
    $('#aboutP').text(List[index].About);
    $('#detailP').text(List[index].Detailinfo);
    document.title=List[index].Firstname + List[index].Lastname;
}