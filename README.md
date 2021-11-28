# Docker and Kubernetes Udemy Course Notes

## Docker Commands
```
dk run -it <image>
```

```
dk build -t <tag> [ -f <name of Dockerfile>] <path to dir containing Dockerfile> 
```

```
dk exec -it <container ID> <command>
```

Remove images
```
dk rmi <image ids separated by white space>
```

Remove all images without containers referencing them
```
dk image prune
```

Copy from host to container
```
dk copy <host path> <container name/id>:<path to copy to>
```

Copy from container to host
```
dk copy <container name/id>:<path to copy> <host path dest>
```