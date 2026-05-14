const {
  Log,
  setToken
} = require("./index");

async function main() {

  setToken(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbmlzaGtyMTEyMDNAZ21haWwuY29tIiwiZXhwIjoxNzc4NzU5Nzc1LCJpYXQiOjE3Nzg3NTg4NzUsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJhNGYyZDk4OC01MDc1LTRiZTctYWMzYS04ODA4NmI3M2Y2NjQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhbmlzaCBrdW1hciByb3kiLCJzdWIiOiI2MjA1Y2Q1ZS1mYzYxLTRlMzktYmQ0YS1hMjA4YWZiNDFjYTQifSwiZW1haWwiOiJhbmlzaGtyMTEyMDNAZ21haWwuY29tIiwibmFtZSI6ImFuaXNoIGt1bWFyIHJveSIsInJvbGxObyI6IjEyMzEwNDIyIiwiYWNjZXNzQ29kZSI6IlRSdlpXcSIsImNsaWVudElEIjoiNjIwNWNkNWUtZmM2MS00ZTM5LWJkNGEtYTIwOGFmYjQxY2E0IiwiY2xpZW50U2VjcmV0IjoiUkpNcG13dUptWWhTeVZocCJ9.ggWv7O2vP3L2wYIqAAtFj8ufD_ake05VufJeUYyy3Xk"
  );

  await Log(
    "backend",
    "info",
    "service",
    "Logging middleware initialized successfully"
  );

  await Log(
    "backend",
    "debug",
    "controller",
    "Fetching users started"
  );

  await Log(
    "backend",
    "error",
    "db",
    "Database connection timeout"
  );
}

main();