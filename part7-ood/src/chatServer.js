class ChatServer {
    constructor() {
        this.activeConnections = [];
        this.publicHistory = [];
        this.adminUser = new User('chat-server-admin');
    }

    addClient(client) {
        client.subscribe('login', this.onLogin.bind(this, client));
        client.subscribe('logout', this.onLogout.bind(this, client));
        client.subscribe('message', this.onClientMessage.bind(this, client));
    }

    removeClient(client) {
        client.unsubscribe('login');
        client.unsubscribe('logout');
        client.unsubscribe('message');
    }

    onLogin(client, user) {
        this.activeConnections.push(client);
        this.sendHistory(client);
    }

    onLogout(client, user) {
        let clientId = this.activeConnections.indexOf(client);
        this.activeConnections.splice(clientId, 1);
    }

    onClientMessage(sender, message, target) {
        if (target) {
            let targetUser = this.getClient(target);
            this.sendMessage(sender, message, target);
        } else {
            this.publicHistory.push({
                sender,
                message
            });
            this.activeConnections.forEach(connection => {
                if (connection !== sender) {
                    this.sendMessage(sender, message, connection);
                }
            });
        }
    }

    sendHistory(client) {
        this.activeConnections.forEach(connection => {
            this.publicHistory.forEach(item => {
                this.sendMessage(item.sender, item.message, connection):
            });
        });
    }

    getClient(userName) {
        return this.activeConnections.find(connection => {
            return connection.user.name === userName;
        });
    }

    sendMessage(sender, message, target) {
        target.receiveMessage(message, sender.user.name);
    }

    sendAdminMessage(message, target) {
        this.publicHistory.push({
            adminUser,
            message
        });
        this.sendMessage(adminUser, message, target);
    }

    clear() {
        this.publicHistory = [];
        this.activeConnections.forEach(connection => {
            connection.clear();
        });
    }
}

class ChatClient {
    constructor() {
        this.user = null;
        this.publicHistory = [];
        this.privateHistory = {};
        this.currentHistory = this.privateHistory;
    }

    receiveMessage(message, userName) {
        console.log('receive message: ', message, userName);
        if (userName) {
            this.openPrivateRoom();
        }
        this.addToHistory(message, userName);
        this.displayMessages();
    }

    join(user) {
        console.log('join: ', user);
        this.user.isLoggedIn = true;
        this.openPublicRoom();
        this.sendLogin(user);
        this.user = user;
    }

    logout() {
        console.log('logout');
        this.user.isLoggedIn = false;
        this.sendLogout(user);
        this.closePrivateRoom();
        this.closePublicRoom();
    }

    openPrivateRoom(userName) {
        console.log('open private room with: ', userName);
    }

    closePrivateRoom() {
        console.log('close private room with: ', userName);
    }

    addToHistory(message, userName) {
        if (userName) {
            this.privateHistory[userName] = this.privateHistory[userName] || [];
            this.currentHistory = this.privateHistory[userName];
        } else {
            this.currentHistory = this.publicHistory;
        }
        this.currentHistory.push(message);
        console.log('add to history: ', message, userName);
    }

    displayMessages() {
        this.currentHistory.forEach(message => {
            console.log('display message: ', message);
        });
    }

    sendPublicMessage(message) {
        console.log('sendPublicMessage: ', message);
        this.addToHistory(message);
        this.sendMessage(message);
        this.displayMessages();
    }

    sendPrivateMessage(message, userName) {
        console.log('sendPrivateMessage: ', message, userName);
        this.openPrivateRoom(userName);
        this.addToHistory(message, userName);
        this.sendMessage(message, userName);
        this.displayMessages(userName);
    }

    sendLogin(user) {
        console.log('send login: ', user);
    }

    sendLogout(user) {
        console.log('send logout: ', user);
    }

    sendMessage(message, userName) {
        console.log('sendPrivateMessage: ', message, userName);
    }

    subscribe(eventType, callback) {
        console.log('subscribe to : ', eventType);
    }

    unsubscribe(eventType, callback) {
        console.log('unsubscribe from : ', eventType);
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.isLoggedIn = false;
    }
}

class Message {
    constructor(data) {
        this.data = data;
    }
}