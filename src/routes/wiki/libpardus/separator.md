<svelte:head>

<title>Ptk Documentation: Separator Widget</title>
<meta name="description" content="Explore the Separator widget in Ptk, a subclass of Gtk.Separator with functionality for setting the orientation of the separator line. Learn its parameters and basic usage with code snippets.">
<meta property="og:title" content="Ptk Documentation: Separator Widget">
<meta property="og:description" content="Explore the Separator widget in Ptk, a subclass of Gtk.Separator with functionality for setting the orientation of the separator line. Learn its parameters and basic usage with code snippets.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/separator">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:image:alt" content="Pardus Logo">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: Separator Widget">
<meta name="twitter:description" content="Explore the Separator widget in Ptk, a subclass of Gtk.Separator with functionality for setting the orientation of the separator line. Learn its parameters and basic usage with code snippets.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: Separator Widget

## Separator Widget

> The `Separator` widget is a subclass of `Gtk.Separator` and provides additional functionality for setting the orientation of the separator line.

### Parameters

The `Separator` widget accepts the following parameter with its type:

- `orientation` (str): The orientation of the separator line. Possible values are "horizontal" and "vertical".

### Basic Usage

To create an instance of the `Separator` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create a horizontal separator
separator_horizontal = Ptk.Separator(orientation="horizontal")

# Create a vertical separator
separator_vertical = Ptk.Separator(orientation="vertical")
```
