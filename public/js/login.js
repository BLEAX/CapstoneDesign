//firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4JdgfKdIAeTh5QfzhoMF-dDWPfQewbKE",
  authDomain: "capstonedesign-eb13f.firebaseapp.com",
  databaseURL:
    "https://capstonedesign-eb13f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "capstonedesign-eb13f",
  storageBucket: "capstonedesign-eb13f.appspot.com",
  messagingSenderId: "1054972036829",
  appId: "1:1054972036829:web:e25dcd0a7e6159d9177d34",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 로그인 버튼 클릭 시 호출되는 함수
window.login = function (e) {
  e.preventDefault();

  var email = document.getElementById("floatingInput").value;
  var password = document.getElementById("floatingPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("로그인에 성공했습니다.");
      location.href = "/main";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error [${errorCode}]: ${errorMessage}`);
      alert("다시 입력해주세요.");
      document.querySelectorAll("input[class=form-control]")[0].value = null;
      document.querySelectorAll("input[class=form-control]")[1].value = null;
    });
};
