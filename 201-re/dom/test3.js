
//6 เพิ่มเติมจากข้อ 5: เมื่อคลิกที่รายการ TODO ในรายการ <ul> ให้ลบรายการนั้นออกจากรายการ TODO
//7 สร้างรายการ <ul id="color-list"> และปุ่ม "สุ่มสี" เพื่อให้ผู้ใช้สุ่มสี HEX และเพิ่มสีนั้นเป็นรายการใน <ul>
//8 เพิ่มเติมจากข้อ 7: เมื่อคลิกที่สีในรายการ <ul> ให้เปลี่ยนสีพื้นหลังของหน้าเว็บเป็นสีนั้น
//9 สร้างกล่องข้อความ <textarea> และปุ่ม "นับ" เพื่อนับจำนวนตัวอักษรทั้งหมดใน textarea และแสดงผลลัพธ์ใน <div id="char-count">
//10 เพิ่มเติมจากข้อ 9: เมื่อพิมพ์ใน textarea ให้ทำการนับจำนวนตัวอักษรแบบ real-time และแสดงผลลัพธ์ใน <div id="char-count">


const clickMe = document.getElementById("click-me")
const op = document.getElementById("output")
const inName = document.getElementById("name-input")
const toSend = document.getElementById("send")

//1 สร้างปุ่ม "คลิกฉัน" ที่เมื่อคลิก จะแสดงข้อความ "Hello, World!" ใน console.
//2 เพิ่มเติมจากข้อ 1: เมื่อคลิกปุ่ม "คลิกฉัน" แทนที่จะแสดงข้อความใน console ให้แสดงใน element <div id="output"> แทน
clickMe.addEventListener('click',function(){
    op.textContent = 'Hello World'
})

//3 สร้าง <input> สำหรับใส่ชื่อ และปุ่ม "ส่ง" เมื่อคลิก "ส่ง" ให้แสดงข้อความ "สวัสดี, [ชื่อที่ใส่]!" ใน <div id="output">
toSend.addEventListener("click",function(){
    const inSend = inName.value
    const outSend = "สวัสดี, " + inSend + "!"
    op.textContent = outSend
})

//4 เพิ่มเติมจากข้อ 3: เมื่อกด Enter ใน input ให้ทำการแสดงข้อความเช่นเดียวกับการคลิกปุ่ม "ส่ง"
// เลือก element โดยใช้ ID
// เพิ่ม event listener เมื่อคลิกที่ปุ่ม "ส่ง"
toSend.addEventListener('click', function() {
    greet();
});

// เพิ่ม event listener เมื่อกดปุ่ม Enter ใน input
inName.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // ป้องกันพฤติกรรมปกติของปุ่ม Enter (ไม่ทำให้เกิด line break)
        greet();
    }
});

// function สำหรับแสดงข้อความทักทาย
function greet() {
    const name = inName.value; // ดึงค่าจาก input ชื่อ
    const greeting = 'สวัสดี, ' + name + '!'; // สร้างข้อความทักทาย
    op.textContent = greeting; // แสดงข้อความใน div
}

//5 สร้างรายการ <ul id="todo-list"> และ <input> และปุ่ม "เพิ่ม" เพื่อให้ผู้ใช้เพิ่มรายการ TODO โดยเมื่อกดปุ่ม "เพิ่ม" 
//หรือ Enter ใน input ให้เพิ่มรายการ TODO เข้าไปในรายการ <ul>
    const todoInput1 = document.createElement('ul')
    todoInput1.setAttribute("id", "todo-list")
    const addButton1 = document.createElement('input')
    addButton1.setAttribute("id", "todo-input")
    const todoList1 = document.createElement('button')
    todoList1.setAttribute("id", "add-todo")

    const todoInput = document.getElementById("todo-list")
    const addButton = document.getElementById("todo-input")
    const todoList = document.getElementById("add-todo")


    // เพิ่ม event listener เมื่อคลิกที่ปุ่ม "เพิ่ม"
    addButton.addEventListener('click', function() {
    addTodo() // เรียกใช้ฟังก์ชัน addTodo เมื่อคลิกปุ่ม
    })

    // เพิ่ม event listener เมื่อกด Enter ใน input
    todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo(); // เรียกใช้ฟังก์ชัน addTodo เมื่อกด Enter
        }
    })

    // ฟังก์ชันสำหรับเพิ่มรายการ TODO
    function addTodo() {
        const todoText = todoInput.value.trim() // ดึงข้อความรายการ TODO และตัดช่องว่างด้านหน้าและด้านหลังออก

        if (todoText !== '') { // ตรวจสอบว่าข้อความรายการ TODO ไม่เป็นค่าว่าง
            const listItem = document.createElement('li') // สร้าง element <li>
            listItem.textContent = todoText // กำหนดข้อความรายการ TODO ใน element <li>
            todoList.appendChild(listItem) // เพิ่ม element <li> เข้าไปในรายการ <ul>
            todoInput.value = '' // เคลียร์ค่าใน input หลังจากเพิ่มรายการ TODO เรียบร้อยแล้ว
            }

        
        }

