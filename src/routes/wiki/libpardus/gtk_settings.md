<svelte:head>

<title>Ptk Documentation: Gtk and Adw Settings</title>
<meta name="description" content="Explore the Gtk and Adw settings dictionary in Ptk, providing mappings for commonly used Gtk orientations and alignments. Learn how to use human-readable names to set properties like horizontal orientation, vertical orientation, fill, start, end, center, and baseline alignment in your GTK+ applications.">
<meta property="og:title" content="Ptk Documentation: Gtk and Adw Settings">
<meta property="og:description" content="Explore the Gtk and Adw settings dictionary in Ptk, providing mappings for commonly used Gtk orientations and alignments. Learn how to use human-readable names to set properties like horizontal orientation, vertical orientation, fill, start, end, center, and baseline alignment in your GTK+ applications.">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/gtk_settings">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: Gtk and Adw Settings">
<meta name="twitter:description" content="Explore the Gtk and Adw settings dictionary in Ptk, providing mappings for commonly used Gtk orientations and alignments. Learn how to use human-readable names to set properties like horizontal orientation, vertical orientation, fill, start, end, center, and baseline alignment in your GTK+ applications.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: Gtk and Adw Settings

## Gtk and Adw Settings

> The `settings` dictionary contains mappings for commonly used Gtk and Adw settings. It allows you to conveniently refer to these settings using human-readable names in your code.

### Available Settings

- `horizontal`: The `Gtk.Orientation` for horizontal orientation, mapped to `Gtk.Orientation(0)`.
- `vertical`: The `Gtk.Orientation` for vertical orientation, mapped to `Gtk.Orientation(1)`.
- `fill`: The `Gtk.Align` for filling available space, mapped to `Gtk.Align(0)`.
- `start`: The `Gtk.Align` for starting alignment, mapped to `Gtk.Align(1)`.
- `end`: The `Gtk.Align` for ending alignment, mapped to `Gtk.Align(2)`.
- `center`: The `Gtk.Align` for center alignment, mapped to `Gtk.Align(3)`.
- `baseline`: The `Gtk.Align` for baseline alignment, mapped to `Gtk.Align(4)`.

### Basic Usage

You can use the `settings` dictionary in your Ptk code to set various Gtk and Adw properties more conveniently. For example:

```python
from libpardus import settings

# Use the horizontal orientation setting
orientation_horizontal = settings["horizontal"]

# Use the fill alignment setting
alignment_fill = settings["fill"]
```
