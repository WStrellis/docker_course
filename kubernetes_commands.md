_Cluster Insights_  
- `kubectl get po -A` - show running infrastructure
- `kubectl get deployments` show deployments
- `kubectl get pods` - show pods
- `kubectl get services` - list services
- `kubectl describe pod liveness-exec` - view results of liveness probe

_Service Management_
- `kubectl apply -f myconfg.yml` - a config file is used to define the desired state
- `kubectl create deployment <name> --image=<image>` - create a deployment. Image is pulled a registry.
- `kubectl expose deployment first-app --type=[LoadBalancer| ClusterIP | NodePort] --port=<port of image>` - LoadBalancer and NodePort both make the pod accessible to outside networks. ClusterIP only allows the pod to communicate with other pods in the same cluster. 
- `kubectl delete [service | deployment ] <name of thing to delete>` - delete resources created by kubernetes
- `kubectl scale deployment/<deployment-name> --replicas=<number>` - create multiple pods
- `kubectl set image deployment/<deployment name> <container name>=<registry/image:tag>` - update the image used for a deployment

_Deploying new images_
- `kubectl rollout status deployment/<deployment name` - view status of image update rollout
- `kubectl rollout undo deployment/<deployment name` - revert a deployment
- `kubectl rollout history deployment/<deployment name` - view a list of deployments
- `kubectl rollout history deployment/<deployment name --to-revision=<deployment number>` - revert a specific deployment