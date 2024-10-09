



ตัวอย่างการเขียนโปรแกรมเชื่อมต่อฐานข้อมูล Firebase databese ด้วยการใช้ API  Authentication สำหรับทำหน้า login เพื่อใช้ยืนยันสิทธิ์ในการเข้าระบบ ซึ่งเป็นบริการที่มีให้บริการฟรีบน Firedbase ครับ..




![2024-10-07_181035](https://github.com/user-attachments/assets/21039d11-6996-47ac-adfc-539f052aa34e)
![2024-10-07_181108](https://github.com/user-attachments/assets/3ded3fc3-7cc5-49e5-b08e-799211ecce37)
![2024-10-07_181122](https://github.com/user-attachments/assets/4955fc3d-59a6-48bc-a253-09fa0900eedf)
![2024-10-07_181346](https://github.com/user-attachments/assets/6ed45096-1b4c-46bf-8cd3-73af1113211a)





ตัวอย่างการอิมพอร์ต API เพื่อทำการโค้ดคำสั่งใน app.js File  

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


1)การใช้งานก็สมัครใช้บริการ Firebase ให้เรียบร้อยก่อนนะครับ
จากนั้นก็ติดตั้งตัวแปลภาษา Nod.js ตามลิงค์ด้านล่างนี้
https://nodejs.org/en

2)ติดตั้งโปรแกม VScode เพื่อใช้แก้ไขสคริปต์ พร้อมกับ extension  live server เพื่อจำรองเซิร์ฟเวอร์ในการรัน ไฟล์ js ครับ



