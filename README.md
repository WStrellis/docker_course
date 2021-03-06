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

Create a network
```
dk network create <name>
```

Create tag from container and associate with registry
```
dk commit <container id> <registry url>/<repo_name>
```

## Dockerfile

- EXEC - These commands always run. When additional commands are specified to start/run a container they are appended to the EXEC command
- CMD - These commands are overwritten by commands specified on the CLI.

## Storage
- Volumes - managed by Docker
    - Anonymous - Use for temporary data . Coupled to container. Removed when container is removed. Cannot be shared or reused.
    - Named - Persistent after container is deleted. Can be shared and reused.
- Bind Mounts - managed by Docker user. Can be shared and reused
    - add `:ro` to bind mounts to make them read only, preventing containers from modifying files on the host

## Networking

Use hostname `host.docker.internal` to allow containers to communicate with services running on the docker host.  

## Devopment Tricks
- Bind mount the project files that change to the container
- Use Nodemon to run the app
- Store `node_modules` in an anonymous volume