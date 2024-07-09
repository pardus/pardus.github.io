<svelte:head>

<title>Ptk Documentation: ListBox Widget</title>
<meta name="description" content="Explore the ListBox widget in Ptk, a container based on Gtk.ListBox with additional features like showing separators between items. Learn its parameters and basic usage with code snippets.">
<meta property="og:title" content="Ptk Documentation: ListBox Widget">
<meta property="og:description" content="Explore the ListBox widget in Ptk, a container based on Gtk.ListBox with additional features like showing separators between items. Learn its parameters and basic usage with code snippets.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/listbox">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:image:alt" content="Pardus Logo">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: ListBox Widget">
<meta name="twitter:description" content="Explore the ListBox widget in Ptk, a container based on Gtk.ListBox with additional features like showing separators between items. Learn its parameters and basic usage with code snippets.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: ListBox Widget

## ListBox Widget

> The `ListBox` widget is a container that arranges its child widgets in a vertical list. It is based on `Gtk.ListBox` and provides additional functionality for setting properties such as showing separators between items.

### Parameters

The `ListBox` widget accepts the following parameters with their types:

- `show_separators` (bool): If True, separators will be displayed between list items. Default is False.

### Basic Usage

To create an instance of the `ListBox` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a ListBox instance with separators between list items
listbox = Ptk.ListBox(show_separators=True)
```
