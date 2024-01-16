document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // ここでユーザー名とパスワードのチェックを行います
    if (username === "admin" && password === "password") {
      alert("ログイン成功！");
      // ログイン成功後にindex.htmlへ遷移
      window.location.href = "index.html";
    } else {
      alert("ユーザー名またはパスワードが間違っています");
    }
  });
