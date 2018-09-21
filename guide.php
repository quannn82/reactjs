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
      <h3>Code-Splitting</h3>
        <h5>Setup webpack:</h5>
          <ul>
            <li>npm install --save-dev webpack and npm install --save-dev webpack-cli</li>
            <li>Guides : https://webpack.js.org/guides/getting-started/</li>
          </ul>
        <h5>Code-Splitting</h5>
          <ul>
            <li>optimization.splitChunks : Tách data trùng lặp trong quá trình build thành file riêng</li>
            <li>Dynamic Imports:</li>
            <li>Prefetching/Preloading modules: Tìm nạp trước và Tìm tải trước</li>
            <li>npm install --save-dev style-loader css-loader file-loader csv-loader xml-loader</li>
          </ul>
      <h3>Webpack</h3>
        <h5>Output Management</h5>
        <ul>
          <li>html-webpack-plugin: Các file sẽ được đổi tên thành một bản dựng, index.html sinh ra vẫn tham chiếu đến các tên cũ.</li>
          <li>clean-webpack-plugin: Quản lý thứ mục dist</li>
          <li>webpack-dev-server: Cung cấp cho bạn một máy chủ web đơn giản và khả năng sử dụng tải lại trực tiếp</li>
        </ul>
      <h3>Context</h3>
        <ul>
          <li>Sử dụng để truyền dữ liệu từ cha vào con mà kon cần qua props</li>
        </ul>

    <div class="">
    Webpack
    Là công cụ đóng gói file
    npm install -g webpack
    -g: chạy global, chạy như 1 ứng dụng trong máy, như npm hay node (sudo: mac)

    React và ReactDOM
    npm install react react-dom --save
    --save để lưu vào file package.json

    webpack.config.js
    module.exports = {
      entry: 'đường dẫn tên file file đầu vào',
      output: {
        path: __dirname,
        filename: 'đường dẫn tên file sau khi đóng gói'
      }
    }

    run: webpack
    </div>
  </body>
</html>
