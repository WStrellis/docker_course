1. Create image from Dockerfile
2. Push image to registry
3. Create deployment `kubectl create deployment first-app --image=wstrellis/kub-first-app`
4. Expose service `kubectl expose deployment first-app --type=LoadBalancer --port=8080`
5. Show service `kubectl get services`
