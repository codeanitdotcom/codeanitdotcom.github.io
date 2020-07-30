---

title: Kubernetes Objects
subtitle: Essential building blocks of the complicated system
date: '2020-07-09'
categories: ['kubernetes', 'devops', 'basics']
keywords: ['kubernetes', 'devops', 'basics', 'overview', 'series', 'part_2', 'objects']
slug: kubernetes-objects
cover: './img/kubernetes-objects.png'
type: 'Blog'

---

__Review [Kuberenetes Overview](https://codeanit.com/blog/kubernetes-overview)__

__This is the second part of the Kubernetes series. In this part I will try to add more insights into Kubenetes Objects.__


# **Kubernetes Objects**
`Kubernetes Objects` are persistent entities in `Kubernetes`. All objects have unique names that allows idempotent creation and retrieval. These objects are stored in `etcd`database as a key-value pair. Objects can categorized as the `Basic Objects` which determines the deployed containerized application's workloads, their associated network and disk resources, and `Higher Level Objects` which are build upon the basic objects to provide additional functionality and convenience features to manage the workloads. Higher level objects have a long-running service-like lifecycle, except `Jobs`. 
  - Basic Objects: Pod, Service, Volume and Namespace 
  - Higher Level Objects: Replication Controllers, Replication Sets, Deployments, Stateful Sets, Daemon Sets Jobs and Cron Jobs

Every `Kubernetes Object` definition is a `YAML` file that contains at least the following items:
- `apiVersion`: The version of the Kubernetes API that the definition belongs to.
- `kind`: The Kubernetes object this file represents. For example, a pod or service.
- `metadata`: This contains the name of the object along with any labels that you may wish to apply to it.
- `spec`: This contains a specific configuration depending on the kind of object you are creating, such as the container image or the ports on which the container will be accessible from.

Instead of a `spec` key, a `Secret` uses a `data` or `stringData` key to hold the required information. The `data` parameter holds base64 encoded data that is automatically decoded when retrieved. The `stringData` parameter holds non-encoded data that is automatically encoded during creation or updates, and does not output the data when retrieving Secrets.


# Review
Kubernetes Objects are the fundamental units that define how the many units exists and functions together.
These building blocks must be understood in details to make the good use of Kubernetes.


__I will share about [Kubernetes Components](https://codeanit.com/blog/kubernetes-components) next.__