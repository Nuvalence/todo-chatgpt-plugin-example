# Todo ChatGPT Plugin Example
An simple example of a ChatGPT plugin that demonstrates it's simplicity. 

To deploy this plugin using Google Cloud Run, use the following steps: 

1. Run `gcloud builds submit --tag gcr.io/todo-chatgpt-api/todo-api`
2. Run `gcloud run deploy --image gcr.io/todo-chatgpt-api/todo-api --platform managed`
3. Take the url from deploying the container on cloud run and populate it in the openapi.yaml file
