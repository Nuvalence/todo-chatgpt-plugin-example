# Todo ChatGPT Plugin Example
An simple example of a ChatGPT plugin. It is an Node.js Express API that supports CRUD operations on todos. 

To deploy this plugin using Google Cloud Run, use the following steps: 

1. Run `gcloud builds submit --tag gcr.io/todo-chatgpt-api/todo-api`
2. Run `gcloud run deploy --image gcr.io/todo-chatgpt-api/todo-api --platform managed`
3. Take the url from deploying the container on cloud run and populate it in the openapi.yaml and ai-plugin.json files and redeploy using steps 1 + 2.
