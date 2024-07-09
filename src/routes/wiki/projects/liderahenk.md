<svelte:head>

<title>Liderahenk Central Management System - Open Source Solution for Network Management</title>
<meta name="description" content="Learn about Liderahenk, an open source central management system designed to manage and monitor systems and users on corporate networks. Explore its components like Lider, Ahenk, and Lider Interface, along with its capabilities in task management, profiles, policies, and reporting.">
<meta property="og:title" content="Liderahenk Central Management System - Open Source Solution for Network Management">
<meta property="og:description" content="Discover Liderahenk, an open source central management system designed to manage and monitor systems and users on corporate networks. Explore its components like Lider, Ahenk, and Lider Interface, along with its capabilities in task management, profiles, policies, and reporting.">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:url" content="https://pardus.github.io/wiki/projects/liderahenk">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Liderahenk Central Management System - Open Source Solution for Network Management">
<meta name="twitter:description" content="Discover Liderahenk, an open source central management system designed to manage and monitor systems and users on corporate networks. Explore its components like Lider, Ahenk, and Lider Interface, along with its capabilities in task management, profiles, policies, and reporting.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

## Liderahenk Central Management System

Liderahenk Central Management System
To be able to centrally manage and monitor the systems and users on the corporate network.
It is an open source software system that provides control and

### Why Liderahenk?

Thanks to its open source code, it is more secure, high quality, flexible, traceable and easy to develop.
is in the structure. Stronger support and total cost of ownership with growing developer community with use
provides an advantage. It manages the computer and the user with a local or distributed LDAP-based solution infrastructure.
All of the system or certain hardware and user sets separately or collectively.
Provides scalable solution to manage

### Components

1. **Lider**

   Storing the data collected in the center is the basic component of the system responsible for distributing the defined policies and assigned tasks to the clients.

2. **Ahenk**

   It is the service software responsible for fulfilling the tasks transmitted from Lider, implementing policies and communicating the results to Lider. Ahenk works as a super user in managed systems.

3. **Lider Interface**

   It is the interface where client and user management operations are performed. Many operations such as defining task and user policies, making server settings, reporting are done through this interface.

### Abilities

1. **Task**

   They are instant jobs that are sent directly to the client or client group and run on clients with Ahenk installed. If the client with Ahenk is active, the sent task is executed instantly. It is often used by plugins developed for standalone operations. With the scheduled task feature, the task sent in the specified time frame is run. In addition, these created scheduled tasks can be updated or canceled. It includes features such as resource usage, package (application) management, local user management, run script, service management, file transfer, usb management.

2. **Profile**

   It refers to the set of configuration settings that can be performed in a plugin. One or more profiles come together to form the policy. It cannot be run on a stand-alone basis. It can be used after it has been added to a policy. It includes features such as web browser profile, script profile, usb profile, message profile, session management profile.

3. **Policy**

   It is created by combining one or more executable profiles. With the policy, it can be ensured that the possibilities-restrictions provided by the add-ons are operated according to the characteristics of a mass. They apply to the user group. After the policy is assigned to the user group, it is applied by querying the Lider during user login.

4. **Reports**

   A detailed search can be made for the clients registered in Liderahenk Central Management System, and a report can be obtained and a Client Group can be created according to the search results. The task details sent to the clients can be queried on the Lider. In addition, a report of the tasks sent on a scheduled basis can be created, rearranged and canceled.
