<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <h1>Advanced Guides</h1>
      <h3>Refs and the DOM</h3>
        <h5>Khi nào dùng Refs</h5>
          <ul class="">
            <li>Quản lý focus, selection, media playback.</li>
            <li>Triggering imperative animations.</li>
            <li>Integrating with third-party DOM libraries.</li>
          </ul>
        <h5>Sử dụng</h5>
          <ul>
            <li>Khai báo: this.textInput = React.createRef();</li>
            <li>Sử dụng: <input type="text" ref={this.textInput} /></li>
            <li>Access focus: this.textInput.current.focus();</li>
            <li>Get value: this.textInput.current.value</li>
          </ul>
          <h5>Lưu ý</h5>
          <ul>
            <li>Functions componentDidMount(), ... (lifecycle hooks) run from in to out.</li>
            <li>Refs chỉ hoạt động bên trong một lớp.</li>
            <li>Nên chuyển đổi component thành một class nếu cần sử dụng Refs, như khi cần dùng lifecycle methods hoặc state.</li>
            <li>Lưu ý sử dụng linh hoạt chức năng phù hợp với cả người dùng chuột và bàn phím</li>
          </ul>
  </body>
</html>
