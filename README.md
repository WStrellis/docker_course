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

Create new tag for image before pushing to registry
```
dk tag <local tag> <remote registry tag>
```

Cleanup anonymous volumes
```
dk volume prune
```

Bind Mount shortcuts  
Linux: `-v $(pwd):/foo`  
Windows: `-v "%cd%":/foo`  

## Storage
- Volumes - managed by Docker
    - Anonymous - Use for temporary data . Coupled to container. Removed when container is removed. Cannot be shared or reused.
    - Named - Persistent after container is deleted. Can be shared and reused.
- Bind Mounts - managed by Docker user. Can be shared and reused