# AWS Lambda Report

## 📌 Overview

Brief summary of what AWS Lambda is and why it's important in cloud computing.

- What is AWS Lambda?
- Key benefits of serverless architecture
- Common use cases

---

## ⚙️ How AWS Lambda Works

### Event-Driven Execution
Explain how Lambda functions are triggered by events.

### Runtime Environments
Supported languages and runtimes (Node.js, Python, Java, Go, etc.)

### Key Concepts
- Functions
- Triggers (S3, API Gateway, CloudWatch, etc.)
- Permissions (IAM Roles)

---

## 🧱 Architecture Diagram

> *(Insert diagram here)*  
Explain how Lambda fits into a larger architecture (e.g., API Gateway → Lambda → DynamoDB).

---

## 💻 Example Use Case

### Use Case:
Example (e.g., image resizing, backend API, chatbot, file processing)

### Lambda Code (Example)
```python
def lambda_handler(event, context):
    return {"statusCode": 200, "body": "Hello from Lambda"}
