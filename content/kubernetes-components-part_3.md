---

title: Kubernetes Componets
subtitle: Understanding Kubernetes Components
date: '2020-07-12'
categories: ['kubernetes', 'devops', 'basics']
keywords: ['kubernetes', 'devops', 'basics', 'series', 'part_3', 'components']
slug: kubernetes-components
cover: './img/kubernetes.png'
type: 'BlogPost'

---

__Please review the previous parts of this series for better understanding:__ 
- [Kuberenetes Overview](https://codeanit.com/posts/kubernetes-overview)
- [Kubernetes Objects](https://codeanit.com/posts/kubernetes-objects)

__This is third part of the Kubernetes series. In this part I will try to add more insights into the essential parts  of Kubernetes. I will add more details on the topics in later in the series or there will separate posts as the topics needs.__


# **Container** 
`Container` is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. The container runtime is responsible for starting and managing containers.

# **Kubernetes** 
`Kubernetes` is a powerful container orchestration system that can manage the deployment and operation of containerized applications across clusters of servers. In addition to coordinating container workloads, Kubernetes provides the infrastructure and tools necessary to maintain reliable network connectivity between your applications and services.

# **Node**
A `Node` is physical or virtual machine. Every cluster must have at least one `Master Node` which controls cluster, and one or many `Worker Node` that hosts `Pod`.

# **Cluster**
`Cluster` is a group of interconnected `Node`. Cluster's state is defined `Kubernetes Objects`. Cluster's desired state includes what applications or other workloads to run, what container images they use, the number of replicas, what network and disk resources to make available.

# **Namespace**
`Namespace` is way to divide cluster resources between users by creating multiple virtual `Clusters` in same physical `Cluster`. They are used in environments with many users spread across multiple teams, or projects. Namespaces can not be nested inside one another and each Kubernetes resource can only be in one Namespace. Objects in the same Namespace will have the same access control policies by default. `Labels` are used to distinguish resources within the same Namespace. `Namespace` resources are not themselves in a `Namespace`, and low-level resources, such as `Nodes` and `PersistentVolumes`, are not in any Namespace.

# **Pod** 
A `Pod` represents a group of one or more `Containers` running together and operating closely as a single, monolithic application in a `Node` in the `Cluster`. Pods are managed entirely as a unit and share resources like environment, volumes and IP space. Pods consist of a main container which serves workload and optionally some helper containers that facilitate closely related tasks. For example, a Pod may have one container running the primary application server and a helper container pulling down files to the shared filesystem when changes are detected in an external repository. Pods are managed by higher level objects by providing template definitions.  

# **Service** 
A `Service` groups `Pods` together that perform the same function as a single entity. It keeps track of containers in the pods and routes to the containers for internal and external access. A service’s IP address remains stable regardless of changes to the pods it routes to which makes it easy to gain discoverability and can simplify containers designs. By default, services are only available using an internally routable IP address, they can be made available outside of the cluster by choosing one of several strategies.

# **Kubernetes API** 
`Kubernetes API` is a resource-based (RESTful) programmatic interface provided via HTTP. It supports retrieving, creating, updating, and deleting primary resources via the standard HTTP verbs (POST, PUT, PATCH, DELETE, GET), includes additional subresources for many objects that allow fine grained authorization (such as binding a pod to a node), and can accept and serve those resources in different representations for convenience or efficiency. It also supports efficient change notifications on resources via "watches" and consistent lists to allow other components to effectively cache and synchronize the state of resources. It the communication medium for the end users, different parts of your cluster, and external components with one another. Most Kubernetes API resource types are `Kubernetes Objects`, but a smaller number of API resource types are  represented by operations.  

# **Controller**
A `Controller` is a non-terminating loop that regulates the state of a system. It watches the state of the cluster, then make or request changes where needed. Each controller tries to move the current cluster state closer to the desired state. There are different types of controllers for specific purposes.

# **Volume** 
`Volume`is simply an abstraction of data in the form of file and directory within a Pod. It exists as long as its Pod exists.

# **Secrets** 
`Secrets` are used to share sensitive information, like SSH keys and passwords, with other `Kubernetes Objects` within the same namespace. 

# Security And Policies
Security in Kubernetes is a big challenge as it is a composed many smaller standalone components. It provides many security mechanisms. `Namespaces` can be used for authentication, authorization and access control. `Resource Quotas` can be provided to avoid resource cannibalization. And `Network Policies` can be setup for proper segmentation and traffic control.

# Networking
All the components of Kubernetes are interconnected. For the entire system to function efficiently, reliability and securely, networking plays critical role. The basic requirements of a Kubernetes network are:
  - all containers can communicate with all other containers without NAT
  - all nodes can communicate with all containers (and vice-versa) without NAT
  - the IP that a container sees itself as is the same IP that others see it as

Network Address Translation(NAT) is a method of remapping an IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device

# Monitoring
Kubernetes includes some internal monitoring tools by default. These resources belong to its [resource metrics pipeline](https://kubernetes.io/docs/tasks/debug-application-cluster/resource-usage-monitoring/#resource-metrics-pipeline), which ensures that the cluster runs as expected. The [cAdvisor](https://kubernetes.io/docs/tasks/debug-application-cluster/resource-usage-monitoring/#cadvisor) component collects network usage, memory, and CPU statistics from individual containers and nodes and passes that information to kubelet; kubelet in turn exposes that information via a REST API. The [Metrics Server](https://kubernetes.io/docs/tasks/debug-application-cluster/core-metrics-pipeline/#metrics-server) gets this information from the API and then passes it to the kube-aggregator for formatting. 


# Review
**Kubernetes** is a large system with many parts functioning as a unit. It has resolved many issues in managing containerized distributed application but before using it in production, it is recommended to understand it very well.


__I will share about [Kubernetes Service](https://codeanit.com/posts/kubernetes-services) next.__