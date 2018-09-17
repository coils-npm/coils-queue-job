# CoilsQueueJob
[application._queueJob]

### Install
```
npm i coils-queue-job -S
```

### Usage

Coils application constructor
```
let CoilsQueueJob = require('coils-queue-job')
this.use(CoilsQueueJob, options)
```
options
- redis: redis client
- path: default: `app/jobs` 
- namespace: default: `_coils_jobs_`