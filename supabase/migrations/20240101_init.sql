CREATE TABLE events (
  event_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  location VARCHAR(255) NOT NULL
);

CREATE TABLE tickets (
  ticket_id SERIAL PRIMARY KEY,
  event_id INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  seat_number VARCHAR(50) NOT NULL,
  FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE
);

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  ticket_id INT NOT NULL,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (ticket_id) REFERENCES tickets(ticket_id) ON DELETE RESTRICT
);

CREATE POLICY user_isolation ON orders
  USING (user_id = current_setting('app.current_user_id')::INT);
