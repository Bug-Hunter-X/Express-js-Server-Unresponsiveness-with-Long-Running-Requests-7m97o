# Express.js Server Unresponsiveness with Long-Running Requests

This repository demonstrates a common issue in Express.js applications where long-running requests can block the event loop, leading to the server becoming unresponsive to new requests.  The `server.js` file contains the buggy code, while `server-solution.js` provides a solution using asynchronous operations.

## Problem

In `server.js`, a simple GET request to the root path includes a 5-second delay.  During this delay, the server is unable to handle any other requests, resulting in hangs or timeouts. This is because Node.js is single-threaded and synchronous operations block the event loop.

## Solution

The `server-solution.js` file demonstrates how to fix this by using asynchronous operations.  By leveraging asynchronous operations (e.g., Promises or async/await), the server remains responsive while handling the long-running task without blocking the event loop. This ensures that the server can process other incoming requests during the delay.