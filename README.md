# Talkify – Real-Time Chat App

Talkify is a full-featured chat application built with Django and WebSockets. It allows users to communicate in real-time via one-to-one and group chats, with features like message reactions, unread message tracking, and admin tools for managing groups and users.

---

## 🛠 Features

### **Core Features**
- Real-time one-to-one chat using WebSockets
- Real-time group chat with multiple users
- Delete messages for self or for everyone
- Edit messages
- Message reactions (emojis)
- Starred messages

### **User & Profile Management**
- User registration and login
- Profile editing
- Custom profile pictures

### **Unread Messages**
- Unread message counts displayed per chat or group
- Bold usernames for chats with unread messages

### **Group Management**
- Create, update, and delete groups
- Add/remove members
- Assign group admins
- View group details and chat history

### **Other Features**
- Responsive UI built with Tailwind CSS
- Dark/light theme support
- Search users and messages
- Notifications for new messages

---

## 💻 Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Python, Django |
| Frontend | HTML, Tailwind CSS, JavaScript |
| Realtime | WebSockets (Django Channels) |
| Database | SQLite  |
| Version Control | Git & GitHub |

---

## 🚀 Installation & Setup

**1. Clone the repository:**
   ```bash
   git clone https://github.com/arooba-shafique/talkify.git
   cd talkify
    
 ```
   
**2. Create a virtual environment:**
 ```bash
   python -m venv venv
# Activate the environment:
# Windows

venv\Scripts\activate
# Linux/Mac

source venv/bin/activate
 ```
**3. Install dependencies:**
 ```bash
pip install -r requirements.txt
 ```
**4. Apply migrations:**
 ```bash
python manage.py migrate
 ```
**5. Run the development server:**
 ```
python manage.py runserver
 ```

**6.Open your browser and go to http://127.0.0.1:8000/ to access Talkify.**

**📂 Project Structure**
 ```bash
talkify/
├── chat/                  
│   ├── models.py
│   ├── views.py
│   ├── consumers.py       
│   ├── templates/
│   └── static/
├── talkify/               
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
├── manage.py
├── requirements.txt
└── README.md
 ```

**👩‍💻 Usage**

Register as a new user.

Start a one-to-one chat with any user.

Create groups and add members.

Send messages, react with emojis, and delete messages if needed.

Track unread messages easily with bolded chat names and counters.

Admins can manage groups and members.
