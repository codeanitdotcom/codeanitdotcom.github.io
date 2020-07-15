---

title: Kubernetes Controller
subtitle: Understanding Controllers In Depth
date: '2020-07-15'
categories: ['kubernetes', 'devops']
keywords: ['kubernetes', 'devops', 'overview', 'series', 'part_5', 'controllers']
slug: kubernetes-controllers
cover: './img/kubernetes.png'
type: 'BlogPost'

---

__Please review the previous parts of this series for better understanding:__ 
- [Kuberenetes Overview](https://codeanit.com/posts/kubernetes-overview)
- [Kubernetes Objects](https://codeanit.com/posts/kubernetes-objects)
- [Kubernetes Components](https://codeanit.com/posts/kubernetes-components)
- [Kubernetes Service](https://codeanit.com/posts/kubernetes-services)

__This is fifth part of the Kubernetes series. In this part I will try to add more insights into Kubernetes `Controller`.__


# What is a Controller in Kubernetes?
A `Controller` is a non-terminating loop that regulates the state of a system. It watches the state of the cluster, then make or request changes where needed. Each controller tries to move the current cluster state closer to the desired state. There are different types of controllers for specific purposes.

# **Kubernetes Control Plane** 
`Kubernetes Control Plane` is a collection of the Controllers. `kube-apiserver`, `kube-controller-manager` and `kube-scheduler` are the three critical processes that makes up the control plane. Nodes that runs these processes are called `Master Node` which are replicated for availability and redundancy.


# Controller Types
Logically, each `Controller` is a separate process, but to reduce complexity, they are all compiled into a single binary and run in a single process. 

- `Node Controller`: Responsible for noticing and responding when nodes go down.

- `Replication Controller`: Responsible for maintaining the correct number of pods for every replication controller object in the system.

- `Endpoints Controller`: Populates the Endpoints object (that is, joins Services & Pods).

- `Service Account & Token Controllers`: Create default accounts and API access tokens for new namespaces

- `Deployments` are most frequently used objects for _stateless application_ which makes life cycle management of replicated Pods easier. It manages `Pods` as rolling updates, canary deploys and blue/green deployments. Deployments can be modified easily by changing the configuration and Kubernetes will adjust the replica sets, manage transitions between different application versions, and optionally maintain event history and undo capabilities automatically. 

- `Stateful Sets` are specialized pod controllers for _stateful applications_ that offer ordering and uniqueness guarantees. Primarily it is used when systems that require stable network identifiers, stable persistent storage, and ordering guarantees like data-oriented applications, like databases, which need access to the same volumes even if rescheduled to a new node.

- `Replication Controller` is responsible for ensuring that the number of Pods deployed in the cluster matches the number of pods in its configuration. If a Pod or underlying host fails, the Controller will start new pods to compensate. If the number of replicas in a Controller’s configuration changes, the Controller either starts up or kills Containers to match the desired number. Replication Controllers can also perform rolling updates to roll over a set of pods to a new version one by one, minimizing the impact on application availability. `Deployments` uses as it's build block.

- `Replication Sets` are an iteration on the `Replication Controller` design with greater flexibility in how the controller identifies the Pods it is meant to manage. The only thing it does not do is rolling updates.

- `Daemon Sets` are another specialized form of Pod Controller that run a copy of a Pod on each node in the cluster (or a subset, if specified). This is most often useful when deploying pods that help perform maintenance and provide services for the nodes themselves. For instance, collecting and forwarding logs, aggregating metrics, and running services that increase the capabilities of the node itself are popular candidates for daemon sets.

- `Jobs` are useful when containers are expected to exit successfully after some time once they have completed their work. 
Build on jobs, 


# Review
**Controller** are the essential parts of Kubernetes which makes `Pods` management easy Kubernetes.


__I will share about [Kubernetes Volume](https://codeanit.com/posts/kubernetes-volume) next.__