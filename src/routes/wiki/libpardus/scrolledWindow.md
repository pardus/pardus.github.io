<svelte:head>

<title>Ptk Documentation: ScrolledWindow Widget</title>
<meta name="description" content="Explore the ScrolledWindow widget in Ptk, a subclass of Gtk.ScrolledWindow with functionality for setting a child widget within the scrolled window. Learn its parameters and basic usage with code snippets.">
<meta property="og:title" content="Ptk Documentation: ScrolledWindow Widget">
<meta property="og:description" content="Explore the ScrolledWindow widget in Ptk, a subclass of Gtk.ScrolledWindow with functionality for setting a child widget within the scrolled window. Learn its parameters and basic usage with code snippets.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/scrolledWindow">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:image:alt" content="Pardus Logo">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: ScrolledWindow Widget">
<meta name="twitter:description" content="Explore the ScrolledWindow widget in Ptk, a subclass of Gtk.ScrolledWindow with functionality for setting a child widget within the scrolled window. Learn its parameters and basic usage with code snippets.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: ScrolledWindow Widget

## ScrolledWindow Widget

> The `ScrolledWindow` widget is a subclass of `Gtk.ScrolledWindow` and provides additional functionality for setting the child widget within the scrolled window.

### Parameters

The `ScrolledWindow` widget accepts the following parameters with their types:

- `child` (Gtk.Widget): The child widget to be displayed within the scrolled window.

### Basic Usage

To create an instance of the `ScrolledWindow` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a ScrolledWindow instance with a child widget
child_widget = ...  # Replace this with the child widget you want to add
scrolled_window = Ptk.ScrolledWindow(child=child_widget)
```
