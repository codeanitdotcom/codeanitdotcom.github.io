---

title: Kubernetes Volume
subtitle: The storage management system
date: '2020-07-16'
categories: ['kubernetes', 'devops']
keywords: ['kubernetes', 'devops', 'overview', 'series', 'part_6', 'volume']
slug: kubernetes-volume
cover: './img/kubernetes-volume.png'
type: 'Blog'

---

__Review previous parts of this series for better understanding:__ 
- [Kuberenetes Overview](https://codeanit.com/blog/kubernetes-overview)
- [Kubernetes Objects](https://codeanit.com/blog/kubernetes-objects)
- [Kubernetes Components](https://codeanit.com/blog/kubernetes-components)
- [Kubernetes Service](https://codeanit.com/blog/kubernetes-services)
- [Kubernetes Controller](https://codeanit.com/blog/kubernetes-controllers)

__This is the sixth part of the Kubernetes series. In this part I will try to add more insights into Kubernetes `Volume`__

# **Volume** 
`Volume`is simply an abstraction of data in the form of file and directory within a Pod. It exists as long as its Pod exists.

The lifecycle of a `Volume` is tied to the lifecycle of the `Pod`, but not to that of a `Container`. If a container within a Pod dies, the Volume persists and the newly launched container will be able to mount the same Volume and access its data. When a Pod gets restarted or dies, so do its Volumes, although if the Volumes consist of cloud block storage, they will simply be unmounted with data still accessible by future Pods.

To preserve data across Pods restarts and updates, the `PersistentVolume` (PV) and `PersistentVolumeClaim` (PVC) objects are used.

`StorageClass` defines different types of storage offered which are categorized as "classes" setup by the Cluster Administrator. Different 'classes" might map to quality-of-service levels, or to backup policies, or to arbitrary policies. Kubernetes itself is unopinionated about what classes represent. This concept is sometimes called "profiles" in other storage systems.

`PersistentVolume` abstracts the details of the implementation of the storage, be that NFS, iSCSI, or a cloud-provider-specific storage system that is provisioned manually by cluster admin or dynamically using `Storage Classes`. It is a resource in the cluster just like a node is a cluster resource. PersistentVolume are volume plugins like Volumes, but have a lifecycle independent of any individual Pod.

`PersistentVolumeClaim` is a request for storage by a user. It is similar to a Pod. `Pods` consume `Node` resources and PersistentVolumeClaim consume `PersistentVolume` resources. Pods can request specific levels of resources (CPU and Memory). PersistentVolumeClaim can request specific size and access modes (e.g., they can be mounted ReadWriteOnce, ReadOnlyMany or ReadWriteMany). PersistentVolumeClaim mounts the PV at the required path. The `spec` for a PVC contains the following items:
- `accessModes` which vary by the use case. These are:
  - `ReadWriteOnce` – mounts the volume as read-write by a single node
  - `ReadOnlyMany` – mounts the volume as read-only by many nodes
  - `ReadWriteMany` – mounts the volume as read-write by many nodes
- `resources` – the storage space that you require
