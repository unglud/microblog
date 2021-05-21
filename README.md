# Microblog split to microservices with event driven architecture
This is tech demo of a current tech stack.

### Tech stack
- Front: React
- Back: node
- Orchestration: Docker -> Kubernetes with Ingres -> Skaffold

## How to takeoff
- Add `127.0.0.1 posts.com` to `/etc/hosts`
- Install Ingress with Helm
  ```
  helm repo add stable https://charts.helm.sh/stable
  helm install stable/nginx-ingress --generate-name
  ```
- Run `skaffold dev`
- Pray
- Go to `http://posts.com/`
