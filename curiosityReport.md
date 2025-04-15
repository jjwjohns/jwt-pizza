# AWS Lambda Curiosity Report

## Why I chose Lambda
I chose to dive into AWS Lambda because I didn't feel like I completely understood what a serverless application was. After some quick research into popular serverless methods I found that AWS Lambda is very simple and quite popular serverless method. So I decided to explore it and figure out what it was how it worked and create a small example.

## Lambda Overview
AWS Lambda is a compute service on AWS. You define a function and a trigger event and AWS will run your function whenever the event occurs. For example you can set up a front end that calls http API endpoints and you can define lambda functions for those http API calls. Whenever a client calls those endpoint your lambda event triggers and AWS will run your function. It is serverless because you don't have to worry about managing servers, instances, clusters, or any equivalent. AWS takes care of it all.


Key points of AWS Lambda

- Basic compute service on AWS
- Only charged for function run times
- AWS manages the servers and automatically scales when needed
- Really good for small applications or basic event-driven tasks

---

## ⚙️ How AWS Lambda Works

### Event-Driven Execution
Functions 

### Runtime Environments
Supported languages and runtimes (Node.js, Python, Java, Go, etc.)

### Key Concepts
- Functions
- Triggers (S3, API Gateway, CloudWatch, etc.)
- Permissions (IAM Roles)

---

## 🧱 Architecture Diagram

![Lambda Diagram](./Curiosity_diagram.png)
Explain how Lambda fits into a larger architecture (e.g., API Gateway → Lambda → DynamoDB).

---

## 💻 Example Use Case

### Use Case:
Example (e.g., image resizing, backend API, chatbot, file processing)

### Lambda Code (Example)
```python
def lambda_handler(event, context):
    return {"statusCode": 200, "body": "Hello from Lambda"}
