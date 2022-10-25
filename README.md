# Kiểm tra version của NodeJs
```java
node -v
npm -v
```
# 1. Get start
## 1.1 Test hoạt động của NodeJS
1. Tạo 1 foder tên tùy ý
2. Trong folder mới tạo, tạo 1 file tên chao.js và mở lên gõ code
```java
//chao.js
console.log('Chao ban! Chuc an lanh');
```
3. Mở command line chuyển vào folder mới Tạo
4. Gỡ lênh thực thi file chao.js
```java
node chao.js
```
## 1.2 Tao project với nodejs
1. Tạo 1 folder tên tùy ý, ví dự Node1
2. Mở command line và chuyển vào folder mới tạo
3. chạy lệnh npm init để khai báo thông tin cho project bạn sẽ yêu cầu thông tin như: name, version, description,.. hãy nhập vào hoặc nhấn enter để dùng gí trị mặc định.Khi hoàn tất sẽ có 1 tên file package.json chứa thông bn, hãy mởi file này lên xem
4. Tạo file index.js sử dụng module http
```java
var http = require('http');
var app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.end('Chào bạn chúc an lành');
});
app.listen(8080);
```
5. Chạy server
```java
    node index
```
6. Test
```java
    http://localhost:8080
```
## 1.3 Cài đặt express
Express là một tập hợp các module quan trong cho 1 project nodejs. Express hỗ trợ các phương thức HTTP và API vô cùn mạnh mẽ. Có thể tổng hợp một số chức năng chính của express như sau:
- Thiết lập các lớp trung gian để trả về HTTP request
- Định nghĩ router cho phép sử dụng các hành động khác nhau dự trên HTTP va URL
- Cho phép tra về các trang HTML dự vào các tham số
1. Để cài đặt express, trong folder project, bn gõ lệnh sau;
```java
npm install --save express
```
Option –save để đảm bảo ExpressJs được thêm vào package.json như là một dependency (một package cần để ứng dụng chạy được).  Chạy xong,  hãy xem trong folder project của bạn, sẽ thấy các module được thêm vào
2. Tạo file server.js sử dụng module express
```java
const exp = require("express");
const app = exp();
const port = 3000;
app.get("/", (req, res) => {
     res.send("<h1>Đây là trang home</h1>");
});
app.get("/gt", (req, res) => {
     res.send("<h1>Đây là trang giới thiệu</h1>");
});

app.listen(port, () =>{
     console.log(`Ung dung dang chay voi port ${port}`);
});
```
- Chạy server.js
```java
– Trong command line, chạy lệnh

node server.js
– Test:  http://localhost:3000
```




