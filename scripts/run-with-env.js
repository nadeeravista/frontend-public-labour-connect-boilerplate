#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Load .env.local file
const envPath = path.join(process.cwd(), ".env.local");

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  //

  envContent.split("\n").forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith("#")) {
      const [key, ...valueParts] = trimmedLine.split("=");
      if (key && valueParts.length > 0) {
        const value = valueParts.join("=").trim();
        process.env[key.trim()] = value;
      }
    }
  });
} else {
  console.error("Error: .env.local file not found at:", envPath);
  console.error(
    "Please create a .env.local file with your environment variables.",
  );
  process.exit(1);
}

// Get the command to run
const commandType = process.argv[2];

let expandedCommand;

if (commandType === "types:gen") {
  expandedCommand = `npx openapi-typescript ${process.env.OPENAPI_SCHEMA_PATH} --output ${process.env.OPENAPI_OUTPUT_PATH}`;
} else if (commandType === "types:watch") {
  expandedCommand = `chokidar "${process.env.OPENAPI_SCHEMA_PATH}" -c "npm run types:gen"`;
} else {
  // For other commands, use the original approach
  const command = process.argv.slice(2).join(" ");
  expandedCommand = command.replace(/\$(\w+)/g, (match, varName) => {
    return process.env[varName] || match;
  });
}

// Execute the command with loaded environment variables
try {
  execSync(expandedCommand, {
    stdio: "inherit",
    env: process.env,
  });
} catch (error) {
  process.exit(1);
}
