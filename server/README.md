# Invest-Analysis-Server

## Overview

Backend Server for the Invest Analysis App. This server is responsible for handling all the requests from the client and fetching the data from the database.

## Installation

1. Clone the repository:

2. Create a `.env` file with following:

```bash
    DB_USER
    DB_PASSWORD
    DB_HOST
    DB_PORT
    DB_DATABASE
    JWT_SECRET
```

3. The database schema can be found at `server/db/db.sql`

4. Install the dependencies:

```bash
npm install
```

5. Start the server:

```bash
npm start
```

The server will start running on http://localhost:3000. or the specified PORT

## API Documentation

This document provides an overview of the endpoints available in the application's API.

### Authentication API


#### Register a new user

- Endpoint: `/api/auth/create`
- Method: `POST`
- Description: Registers a new user.
- Request Body:
  ```json
  {
    "user_name": "string",
    "user_password": "string",
    "email": "string"
  }
  ```
- Response
    ```json
        {
        "success": true,
        "status": 201,
        "message": "User Created",
        "data": {
            "user_id": "string",
            "user_name": "string",
        }
    }
    ```

#### Login
- Endpoint: `/api/auth/login`
- Method: `POST`
- Description: Logs in a user. Returns a token for authentication.
- Request Body:
    ```json
    {
        "user_name": "string",
        "user_password": "string"
    }
    ```
- Response
    ```json
    {
        "success": true,
        "status": 200,
        "message": "Login Success",
        "data": {
            "token": "string"
        }
    }
    ```

### Previous Search API
#### Get Previous Searches
- Endpoint: `/api/previoussearch`
- Method: `GET`
- Description: Get all the previous searches made by the user.
- Request Headers:
    ```json
    {
        "Authorization": "Bearer <token>"   
    }
    ```
- Query Parameters:
    - id = user id of the user
- Response
    ```json
    {
        "success": true,
        "status": 200,
        "message": "Previous Searches",
        "data": {
            "user" : {
                "user_id": "string",
                "user_name": "string",
                "isadmin": "boolean",
                "iat": "number",
                "exp": "number"
            },
            "recent_search" : ["String"]

        }
    }
    ```
### Dashboard API
#### Get dashboard content
- Endpoint: `/api/dashboard`
- Method: `GET`
- Description: Retrieves dashboard content.
- Request Headers:
    ```json
    {
        "Authorization": "Bearer <token>"   
    }
    ```
- Query Parameters:
    - id = user id of the user
    - q = search query (Name of the company)
    - tf = timeframe (1d, 1w, 1m, 3m, 6m, 1y)
    - geo = geographical location (Optional)
- Response
    ```json
    {
        "success": true,
        "status": 200,
        "message": "Previous Searches",
        "data": {
            "user" : {
                "user_id": "string",
                "user_name": "string",
                "isadmin": "boolean",
                "iat": "number",
                "exp": "number"
            },
            "contents" : {
                "company": "string",
                "sentiment": "string",
                "timeframe" : "string",
                "geo": "string",
                "total_searches": "number",
                "peak_search": "date",
                "related_news" : ["String"],
                "related_companies" : ["String"]

            }

        }
    }
    ```

### Error Responses
```json
{
    "success": false,
    "status": "status_code",
    "message": "Error message",
    "stack": {}
}
```