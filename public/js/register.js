//firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

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

// 비밀번호 일치 여부 검사
window.password_check = function (e) {
  var pw1 = document.getElementById("floatingPassword").value;
  var pw2 = document.getElementById("floatingPasswordCheck").value;

  if (pw2 == "") {
    document.getElementById("pwConfirm").innerText = "";
  } else if (pw1 == pw2) {
    document.getElementById("pwConfirm").innerText = "";
    return true;
  } else {
    document.getElementById("pwConfirm").innerText = "Passwords do not match";
    return false;
  }
};

window.signUp = function (e) {
  e.preventDefault();

  var name = document.getElementById("floatingName").value;
  var email = document.getElementById("floatingInput").value;
  var password = document.getElementById("floatingPassword").value;
  var nickname = document.getElementById("floatingNickname").value;

  if (
    validate_email(email) == false ||
    validate_field(name) == false ||
    password_check() == false ||
    nickname == ""
  ) {
    alert("이메일이나 비밀번호가 잘못되었습니다.");
  } else {
    alert("회원가입이 완료되었습니다.");
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        //여기까지는 잘 됨.

        await setDoc(doc(db, "users", user.uid), {
          name: name,
          email: email,
          nickname: nickname,
          test1_level: null,
          test1_score: null,
          test2_level: null,
          test2_score: null,
        });
      })
      .then(() => {
        window.location.href = "/login";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error [${errorCode}]: ${errorMessage}`);
      });
  }
};

// 이메일 유효성 검사
function validate_email(email) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

  if (pattern.test(email) === true) {
    return true; // 정상 이메일
  } else {
    return false;
  }
}

// 이름 빈칸 검사
function validate_field(field) {
  if (field == null) {
    return false;
  }
  if (field <= 0) {
    return false;
  } else {
    return true;
  }
}

// 비밀번호 6자리 이상 검사
// function validate_password(password) {
//     if (password < 6) {
//         return false;
//     } else {
//         return true;
//     }
// }
