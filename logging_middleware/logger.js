const {
  STACKS,
  LEVELS,
  BACKEND_PACKAGES
} = require("./constants");

let AUTH_TOKEN = "";

function setToken(token) {

  if (!token) {
    throw new Error("Token is required");
  }

  AUTH_TOKEN = token;
}

async function Log(stack, level, pkg, message) {

  try {

    if (!AUTH_TOKEN) {
      throw new Error("Auth token not set");
    }
    if (!STACKS.includes(stack)) {
      throw new Error("Invalid stack value");
    }

    if (!LEVELS.includes(level)) {
      throw new Error("Invalid level value");
    }
    if (!BACKEND_PACKAGES.includes(pkg)) {
      throw new Error("Invalid package value");
    }

    if (!message || typeof message !== "string") {
      throw new Error("Message must be a string");
    }

    const response = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${AUTH_TOKEN}`
        },

        body: JSON.stringify({
          stack,
          level,
          package: pkg,
          message
        })
      }
    );

    const data = await response.json();

    console.log("Log Success:", data);

    return data;

  } catch (error) {

    console.error(
      "Logging Failed:",
      error.message
    );

  }
}

module.exports = {
  Log,
  setToken
};