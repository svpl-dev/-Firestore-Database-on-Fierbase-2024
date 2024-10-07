import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
const firebaseConfig = {
   apiKey: "AIzaSyA019g3xChv5n_N1Zc5RRxmO-EG-brJ0OY",
   authDomain: "sivapol-39216.firebaseapp.com",
   projectId: "sivapol-39216",
   storageBucket: "sivapol-39216.appspot.com",
   messagingSenderId: "142165691245",
   appId: "1:142165691245:web:8eaa567a5dd1d3055f6864"
 };
//กำหนดตัวแปร
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const form = document.getElementById("registerForm")
const formarea = document.getElementById("form-area")
const profile = document.getElementById("profile")
const welcome = document.getElementById("welcome")
const logout=document.getElementById("logout")
const loginForm = document.getElementById("loginForm")
const classroom =document.getElementById("classroom")
const iframe =document.getElementById("iframe")
const iframe2 =document.getElementById("iframe2")
const btnregister =document.getElementById("btn-register")
const cancle =document.getElementById("btn-cancle")
const btnhome = document.getElementById("home")
const btnStudent =document.getElementById("class-student")
const btnEdit = document.getElementById("class-edit")


//กดปุ่มลงทะเบียนใหม่

var btnRegister = document.getElementById('btn-register')
// ตรวจสอบว่าปุ่มมีอยู่ใน DOM
if (btnRegister) {
    // เพิ่ม event listener สำหรับการคลิกปุ่ม
    btnRegister.addEventListener('click', function() {
       // alert("กำลังเปลี่ยนเส้นทางเป็นห้องเรียนโค้ดดิ้งออนไลน์ค่ะ")
        form.style.display="block"
        loginForm.style.display="none"
      
  


    });
} else {
    console.error('เกิดข้อผิดพลาด');
}


//กดปุ่มยกเลิกหน้าลงทะเบียน

var btnCancle = document.getElementById('btn-Cancel')
// ตรวจสอบว่าปุ่มมีอยู่ใน DOM
if (btnCancle) {
    // เพิ่ม event listener สำหรับการคลิกปุ่ม
    btnCancle.addEventListener('click', function() {
        //alert("กำลังเปลี่ยนเส้นทางเป็นห้องเรียนโค้ดดิ้งออนไลน์ค่ะ")
       form.style.display="none"
      loginForm.style.display="block"
      
      });
} else {
    console.error('เกิดข้อผิดพลาด');
}



//ส่งค่าเมื่อกดปุ่ม submit form
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const email = form.email.value
    const password = form.password.value
    createUserWithEmailAndPassword(auth,email,password)
    .then((result)=>{
        alert("สร้างบัญชีผู้ใช้เรียบร้อย")
        form.email.value =""
        form.password.value =""
    }).catch((error)=>{
        alert(error.message)
    })
})

onAuthStateChanged(auth,(user)=>{
    //login
    if(user){
        profile.style.display="block"
        formarea.style.display="none"
        iframe2.style.display="none"
        
       
        welcome.innerText=`ยินดีต้อนรับคุณ อีเมล : ${user.email}`
       /* window.location.href = "student/index.html";*/
        form.email.value =""
        form.password.value =""


         
    }else{
        profile.style.display="none"
        formarea.style.display="block"
        
         
      
       /* loginForm.style.disply="none"*/
        form.email.value =""
        form.password.value =""
    }
})


   var classroomButton = document.getElementById('classroom')
    // ตรวจสอบว่าปุ่มมีอยู่ใน DOM
    if (classroomButton) {
        // เพิ่ม event listener สำหรับการคลิกปุ่ม
        classroomButton.addEventListener('click', function() {
           // alert("กำลังเปลี่ยนเส้นทางเป็นห้องเรียนโค้ดดิ้งออนไลน์ค่ะ")
           // parent.document.location.href = 'online/index.html';
           alert("กำลังเปลี่ยนเส้นทางไปหน้าห้องเรียนโค้ดดิ้งค่ะ")
           // parent.document.location.href = 'online/index.html';
           // หลังจากลบแล้วให้รีเฟสหน้าจอ
    
          
       iframe.style.display="none"
       iframe2.style.display="block"
       classroom.style.display="none"
       btnhome.style.display="block"
       logout.style.display="none"
       classroom.style.display="none"
       btnStudent.style.display="none"
       btnEdit.style.display="none"
       loginForm.style.display="none"
       formarea.style.display="none"
       form.style.display="none"
       
    });

    } else {
        console.error('ไม่พบปุ่มที่มี id เป็น classroom');
    }


    //ปุ่มกลับเป็นหน้าแรก
    var btnHome = document.getElementById('home')
    // ตรวจสอบว่าปุ่มมีอยู่ใน DOM
    if (btnHome) {
        // เพิ่ม event listener สำหรับการคลิกปุ่ม
        btnHome.addEventListener('click', function() {
           alert("กำลังเปลี่ยนเส้นทางไปที่หน้าแรกค่ะ")
           // parent.document.location.href = 'online/index.html';
           // หลังจากลบแล้วให้รีเฟสหน้าจอ
   
          
       iframe.style.display="block"
       iframe2.style.display="none"
       btnhome.style.display="none"
       classroom.style.display="none"
       btnStudent.style.display="none"
       btnEdit.style.display="none"
       loginForm.style.display="none"
       formarea.style.display="none"
       form.style.display="none"
      logout.style.display="block"
      classroom.style.display="none"
           
    // Refresh the page and bypass the cache
location.reload(true);
             
          
        });
    } else {
        console.error('ไม่พบปุ่มที่มี id เป็น classroom');
    }



logout.addEventListener("click",(e)=>{
    signOut(auth).then(()=>{
        alert("ออกจากระบบเรียบร้อย")
        form.email.value =""
        form.password.value =""
        // หลังจากลบแล้วให้รีเฟสหน้าจอ
   
        location.reload();
     
    }).catch((error)=>{
        alert(error.message)
    })
})


loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const email = loginForm.email.value
    const password = loginForm.password.value
    signInWithEmailAndPassword(auth,email,password)
    .then((result)=>{
        alert("ลงชื่อเข้าใช้เรียบร้อย")
        form.email.value =""
        form.password.value =""
        location.reload();
             
    }).catch((error)=>{
        alert(error.message)
        
    })
})


form.style.display="none"
btnhome.style.display="none"


