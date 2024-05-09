// 게시된 글을 저장할 배열
let posts = [];

// 글 올리기 폼과 게시된 글을 관리하는 함수
document
  .getElementById("postForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // 폼 제출 기본 동작 막기

    // 입력된 내용 가져오기
    let content = document.getElementById("postContent").value;

    // 입력된 내용이 비어있는지 확인
    if (content.trim() !== "") {
      // 새로운 글 생성
      let newPost = {
        content: content,
        date: new Date().toLocaleString(), // 현재 날짜와 시간 저장
      };

      // 게시된 글 목록에 추가
      posts.push(newPost);

      // 입력 폼 비우기
      document.getElementById("postContent").value = "";

      // 글 목록 다시 렌더링
      renderPosts();
    } else {
      alert("글을 입력하세요.");
    }
  });

// 게시된 글 목록을 화면에 보여주는 함수
function renderPosts() {
  let postsHTML = "";
  posts.forEach(function (post, index) {
    postsHTML += `
            <div>
                <p><strong>${index + 1}. ${post.date}</strong></p>
                <p>${post.content}</p>
            </div>
            <hr>
        `;
  });
  document.getElementById("posts").innerHTML = postsHTML;
}
