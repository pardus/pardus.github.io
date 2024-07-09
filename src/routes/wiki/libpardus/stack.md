<svelte:head>

<title>Ptk Documentation: Stack Widget</title>
<meta name="description" content="Explore the Stack widget in Ptk, a subclass of Gtk.Stack with functionality for managing a collection of child widgets. Learn its basic usage and refer to the official Gtk documentation for available properties and methods.">
<meta property="og:title" content="Ptk Documentation: Stack Widget">
<meta property="og:description" content="Explore the Stack widget in Ptk, a subclass of Gtk.Stack with functionality for managing a collection of child widgets. Learn its basic usage and refer to the official Gtk documentation for available properties and methods.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/stack">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:image:alt" content="Pardus Logo">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: Stack Widget">
<meta name="twitter:description" content="Explore the Stack widget in Ptk, a subclass of Gtk.Stack with functionality for managing a collection of child widgets. Learn its basic usage and refer to the official Gtk documentation for available properties and methods.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: Stack Widget

## Stack Widget

> The `Stack` widget is a subclass of `Gtk.Stack` and provides additional functionality for managing a collection of child widgets. It allows you to switch between child widgets, displaying only one at a time.

### Parameters

The `Stack` widget does not have any specific parameters in addition to those provided by the `Gtk.Stack` class. You can refer to the official Gtk documentation for the available properties and methods.

### Basic Usage

To create an instance of the `Stack` widget, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a Stack instance
stack = Ptk.Stack()
```
