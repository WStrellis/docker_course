# Kubernetes Notes
- Pod - Pods are like boxes that wrap a container. Each pod is considered a separate application and therefore should only have one container, although pods can be used to host multiple  containers.
    - have internal IP address that changes each time it is created. Cannot be use to reach with network requests
    - Service Object can be used to expose a Pod to externa networks
- Worker Node - runs pods. Similar to a vm. Can host multiple pods. Has proxy network and stored configuration.
- Master Node - manages the worker nodes(scale, load balancing, setup/tear down, health monitoring, etc..)
- Cluster - the master node, worker nodes, and pods
- admin must create Cluster and nodes
- Kubernetes manages _deployed_ resources. It cannot deploy infrastructure.
- kubctl - tool used to manage the cluster