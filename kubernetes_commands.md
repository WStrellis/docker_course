`kubectl get po -A` - show running infrastructure
`kubectl get deployments` show deployments
`kubectl get pods` - show pods
`kubectl create deployment <name> --image=<image>` - create a deployment. Image is pulled a registry.
`kubectl expose deployment first-app --type=[LoadBalancer| ClusterIP | NodePort] --port=<port of image>` - LoadBalancer and NodePort both make the pod accessible to outside networks. ClusterIP only allows the pod to communicate with other pods in the same cluster. 
`kubectl get services` - list services