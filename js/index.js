console.log(
  "%c" +
  " __      __  ______   __  __   ______     " +
  "\n" +
  "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
  "\n" +
  "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
  "\n" +
  " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
  "\n" +
  "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
  "\n" +
  "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
  "\n" +
  "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

document.addEventListener("DOMContentLoaded", function () {
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("comment-list");
  const submitButton = document.getElementById("submit-comment");

  submitButton.addEventListener("click", function () {
    const commentText = commentInput.value.trim();

    if (commentText) {
      // 새로운 댓글 요소 생성
      const newComment = document.createElement("li");
      newComment.classList.add("comment-item");
      newComment.innerHTML = `
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지">
          <span>방문자</span>
        </div>
        <div class="comment-content">${commentText}</div>
      `;

      // 댓글 리스트에 추가
      commentList.appendChild(newComment);

      // 입력창 초기화
      commentInput.value = "";
    }
  });
});

