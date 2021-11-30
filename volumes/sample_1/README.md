Start with:
```
dk run -d -p 3000:80 --rm -v feedback:/srv/feedback -v $(pwd):/srv:ro -v /srv/node_modules -v /srv/temp nodeapp:latest
```