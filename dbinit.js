const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('blog.db');

db.serialize(function() {
	db.run(
		'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(20) NOT NULL, password VARCHAR(100) NOT NULL)'
		);
	db.run(
		'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, author INT, title VARCHAR(100) NOT NULL, content VARCHAR NOT NULL, created_at INT(10), FOREIGN KEY (author) REFERENCES users (id))',
		);
	db.run(
		"INSERT INTO users (username, password) VALUES ('admin', 'admin')"
	);
	db.run(
		"INSERT INTO users (username, password) VALUES ('user1', 'pw')"
	);
	db.run(
		"INSERT INTO users (username, password) VALUES ('user2', 'pw')"
	);
	db.run(
		"INSERT INTO posts (author, title, content) VALUES ('1', 'test title', 'test content')"
	);
})