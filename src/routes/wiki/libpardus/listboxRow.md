<svelte:head>

<title>Ptk Documentation: ListBoxRow Widget</title>
<meta name="description" content="Explore the ListBoxRow widget in Ptk, a subclass of Gtk.ListBoxRow with additional functionality for setting child widgets within list rows. Learn its parameters and basic usage with code snippets.">
<meta property="og:title" content="Ptk Documentation: ListBoxRow Widget">
<meta property="og:description" content="Explore the ListBoxRow widget in Ptk, a subclass of Gtk.ListBoxRow with additional functionality for setting child widgets within list rows. Learn its parameters and basic usage with code snippets.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/listboxRow">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:image:alt" content="Pardus Logo">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: ListBoxRow Widget">
<meta name="twitter:description" content="Explore the ListBoxRow widget in Ptk, a subclass of Gtk.ListBoxRow with additional functionality for setting child widgets within list rows. Learn its parameters and basic usage with code snippets.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: ListBoxRow Widget

## ListBoxRow Widget

> The `ListBoxRow` widget is a subclass of `Gtk.ListBoxRow` and provides additional functionality for setting the child widget within a list row.

### Parameters

The `ListBoxRow` widget accepts the following parameters with their types:

- `child` (Gtk.Widget): The child widget to be displayed within the row.

### Basic Usage

To create an instance of the `ListBoxRow` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a ListBoxRow instance with a child widget
child_widget = Ptk.Label(label="Ptk ListBoxRow Child")  # Replace this with the child widget you want to add
listbox_row = Ptk.ListBoxRow(child=child_widget)
```
