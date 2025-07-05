# Understanding Web Protocols and HTTP

This document outlines key concepts related to web protocols and HTTP, based on a series of questions and answers.

## 1. Protocol Definition

In general, a protocol refers to a set of agreed-upon rules or procedures that govern the operation of systems, societies, governments, and other elements, such as the internet.

In the context of computers and the web, a protocol defines the guidelines, rules, and conventions for the effective transmission of data between a web client and a web server across various devices. HTTP, for instance, refers specifically to the Hypertext Transfer Protocol.

## 2. HTTP's Foundation: TCP/IP

The Hypertext Transfer Protocol (HTTP) is built on top of the Transmission Control Protocol/Internet Protocol (TCP/IP) system. TCP/IP forms the fundamental networking protocols that link and operate the internet and most computer networks.

* **TCP (Transmission Control Protocol):** Responsible for breaking down data to be transmitted into smaller packages and then reassembling them at the destination in the correct order, ensuring reliable delivery.
* **IP (Internet Protocol):** Determines where the data is sent using unique addresses to ensure that data packets are routed to the correct destination.

## 3. Successful Server Response

A successful response from a server is typically indicated by the **200 OK** Status Code.

## 4. CRUD Operation Equivalents for HTTP Methods

The HTTP methods correspond to standard CRUD (Create, Read, Update, Delete) operations as follows:

* **4.1. C - CREATE:**
    * **HTTP Method:** `POST`
    * **Purpose:** Used to create a new resource on a server by sending data in the request body.

* **4.2. R - READ:**
    * **HTTP Method:** `GET`
    * **Purpose:** Used to retrieve data or a representation of a resource from a server.

* **4.3. U - UPDATE:**
    * **HTTP Methods:** `PUT` or `PATCH`
    * **`PUT`:** Used to update or entirely replace an existing resource on the server with the data provided in the request body.
    * **`PATCH`:** Used to apply partial modifications to an existing resource. This method updates only the parts of the resource that need changing, rather than replacing the entire resource.

* **4.4. D - DELETE:**
    * **HTTP Method:** `DELETE`
    * **Purpose:** Used to delete the specified resource from the server.

## 6. Relevant Choices

The relevant choices are: `b, c & f`.

## 7. Forbidden Status Code

The status code indicating a forbidden response is: `403 Forbidden`.