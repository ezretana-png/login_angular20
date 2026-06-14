# Login Angular 20 — Full-Stack Authentication

A full-stack login implementation with Angular 20 on the frontend and a backend API for authentication. Demonstrates end-to-end login flow with secure credential handling.

## Project Description

This project implements a complete login system where the Angular client communicates with a REST API for user authentication. It covers the full authentication lifecycle: form input, API call, token handling, and protected route access.

## Architecture Overview

```
Client (Angular 20)  -->  HTTP/JSON  -->  Backend API  -->  Database
      |                                                      |
  AuthService                                              Users
  LoginComponent                                           (mock or real)
  AuthGuard (route protection)
  Token storage (localStorage / session)
```

## Setup Instructions

### Frontend

```bash
cd login_angular20/frontend  # adjust path as needed
npm install
ng serve
```

### Backend

```bash
cd login_angular20/backend  # adjust path as needed
dotnet restore
dotnet run
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Angular 20, TypeScript, HTML/CSS |
| Backend | .NET Core / ASP.NET Core Web API |
| Auth | JWT (JSON Web Tokens) |
| Database | SQL Server (or configured provider) |

## Note

This repository shares scope with the Angular login practice app. Consider merging both into a consolidated Angular authentication showcase with the latest Angular version.
