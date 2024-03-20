CREATE DATABASE investanalysis;

CREATE TABLE usertable(
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(60) NOT NULL UNIQUE,
  user_password VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE newstable(
  news_id SERIAL PRIMARY KEY,
  title TEXT,
  description TEXT,
  url TEXT,
  urlToImage TEXT,
  publishedAt TEXT,
  content TEXT
);