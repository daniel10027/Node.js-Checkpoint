# 🧩 Node.js Checkpoint

## 🎯 What You're Aiming For
In this checkpoint, you will be introduced to **Node.js** through a series of guided exercises.  
Each exercise focuses on understanding how Node.js works with servers, the file system, and external modules.

You will create a **separate file for each problem**.

---

## 🛠 Instructions

### 1️⃣ Install Node.js
Make sure Node.js is installed on your system.  
You can verify the installation by running:
```bash
node -v
````

---

### 2️⃣ Hello World

In this task, you will:

* Create a file named **`hello-world.js`**
* Write a program that prints `"HELLO WORLD"` to the console

---

### 3️⃣ Create a Server

In this task, you will:

* Create a file named **`server.js`**
* Write a program that runs on **port 3000**
* When someone accesses [http://localhost:3000](http://localhost:3000), the server should respond with:

  ```
  <h1>Hello Node!!!!</h1>\n
  ```

---

### 4️⃣ File System Operations

In this task, you will:

1. Require the **File System** module.
2. Create a file named **`welcome.txt`** containing one line:
   `"Hello Node"`
3. Create a program that reads and logs data from **`hello.txt`** in the console.

---

### 5️⃣ Password Generator

In this task, you will:

* Create a file named **`password-generator.js`**
* Use the package [generate-password](https://www.npmjs.com/package/generate-password)
* Install it with:

  ```bash
  npm install generate-password
  ```
* Create a function that generates random passwords and displays them using `console.log()`

---

### 6️⃣ Email Sender

In this task, you will:

* Create a file named **`email-sender.js`**
* Install the package [nodemailer](https://www.w3schools.com/nodejs/nodejs_email.asp)

  ```bash
  npm install nodemailer
  ```
* Try to send yourself an email using Nodemailer.

---

## ⚠️ Note

Before uploading your work to GitHub:

* Remove all personal information such as your real email or password.
* Add a `.gitignore` file and include `node_modules`.

---

**End of Checkpoint**