CREATE DATABASE investanalysis;

CREATE TABLE usertable(
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(60) NOT NULL UNIQUE,
  user_password VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE searchhistory (
  search_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES usertable(user_id),
  search_query VARCHAR(255) NOT NULL,
  search_timestamp TIMESTAMP DEFAULT NOW()
);

CREATE TABLE api_usage (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES usertable(user_id),
  timestamp TIMESTAMP DEFAULT NOW(),
  method VARCHAR(10) NOT NULL,
  url TEXT NOT NULL,
  user_agent TEXT
);
CREATE TABLE auth_tokens (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES usertable(user_id), 
    token VARCHAR(255) NOT NULL,
    expiration_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);