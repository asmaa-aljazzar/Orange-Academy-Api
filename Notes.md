# API

## What is Web API?
*API stands for Application Programming Interface.*
- A Web API is an application programming interface for the Web.
- A Browser API can extend the functionality of a web browser.
- A Server API can extend the functionality of a web server.

## The most important APIs in HTML/JavaScript development are.
- The DOM API for HTML and XML 
**The DOM (Document Object Model) is the core API for HTML and XML documents. It provides a structured representation of a webpage, allowing JavaScript to access and manipulate elements, attributes, and content dynamically, creating interactive user interfaces.**

- The Fetch API for networking
**The modern standard for making network requests to servers and retrieving resources (like data from a database or a third-party service). It provides a more robust and flexible alternative to older methods like XMLHttpRequest.**

- The Web Storage API for client-side data
**Offers mechanisms (localStorage and sessionStorage) to store key/value pairs of data in the browser more intuitively than cookies, allowing data to persist across sessions or page reloads.**

## Third Party APIs
- YouTube API - Allows you to display videos on a web site.
- Twitter API - Allows you to display Tweets on a web site.
- Facebook API - Allows you to display Facebook info on a web site.

## REST API methods
### GET
*GET is used to request data from a specified resource.*
The query string (name/value pairs) is sent in the URL of a GET request.

- GET requests can be cached
- GET requests remain in the browser history
- GET requests can be bookmarked
- GET requests should never be used when dealing with sensitive data
- GET requests have length restrictions
- GET requests are only used to request data (not modify)
- GET allowed only ascii characters

### POST
*POST is used to send data to a server to create/update a resource.*
The data sent to the server with POST is stored in the request body of the HTTP request.

- POST requests are never cached
- POST requests do not remain in the browser history
- POST requests cannot be bookmarked
- POST requests have no restrictions on data length
- Back/reload => Data will be re-submitted (the browser should alert the user)

### PUT 
*PUT is used to send data to a server to create/update a resource.*

The difference between POST and PUT is that PUT requests are idempotent.
Calling the same PUT request multiple times will always produce the same result.
Calling a POST request repeatedly have side effects of creating the same resource multiple times.

### PATCH
*The PATCH method is used to apply partial modifications to a resource.*

### DELETE vs SOFT DELETE
***What is Soft Delete?***
*Soft Delete is a method where data is not completely removed but marked as deleted. This means the data can still be accessed or recovered later if needed. It is useful for keeping a history of changes.

**Advantages**
- The deleted data can be easily restored if needed.
- It keeps track of changes over time for auditing purposes.
- Reduces the chance of losing important information.

**Disadvantages**
- It can lead to large database sizes because deleted data is still stored.
- Requires more complex queries to filter out deleted data.
- Users might be confused by seeing "deleted" data.

***What is Hard Delete?***
Hard Delete is a method that completely removes data from the database. Once data is hard deleted, it cannot be recovered. This method is useful when data is no longer needed.

**Advantages**
- It removes unnecessary data, saving storage space.
- Makes database management simpler with less data to handle.
- No confusion, as deleted data is completely gone.

**Disadvantages**
- Permanently removes data, which may be needed later.
- Lacks historical records for auditing or tracking changes.
- Hard to recover data once it has been deleted.




