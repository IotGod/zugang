# Projektstruktur:
# - backend/      (FastAPI + MSSQL + MySQL + Mapping UI + Authentifizierung)
# - frontend/     (React + Leaflet Karte + Login + Userverwaltung)
# - docker-compose.yml
# - .env

# docker-compose.yml
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    env_file:
      - .env
    volumes:
      - ./backend:/app
    depends_on:
      - mysql

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    stdin_open: true
    tty: true
    volumes:
      - ./frontend:/app

  mysql:
    image: mysql:8.0
    container_name: mysql
    environment:
      MYSQL_ROOT_PASSWORD: rootpw
      MYSQL_DATABASE: rfid_auth
      MYSQL_USER: authuser
      MYSQL_PASSWORD: authpw
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:

# .env
MSSQL_SERVER=sqlserver.example.com
MSSQL_DATABASE=rfid_data
MSSQL_USERNAME=sa
MSSQL_PASSWORD=your_password
MYSQL_HOST=mysql
MYSQL_DATABASE=rfid_auth
MYSQL_USER=authuser
MYSQL_PASSWORD=authpw
JWT_SECRET=supersecretkey

# backend/main.py (FastAPI Backend mit MSSQL + MySQL persistenter Auth)
...
# frontend (React): Login, Karte, Benutzerverwaltung und Hover-Zählung folgen
