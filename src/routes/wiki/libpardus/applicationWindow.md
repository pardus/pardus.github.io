<svelte:head>

<title>Ptk Documentation: ApplicationWindow Widget</title>
<meta name="description" content="Explore the ApplicationWindow widget in Ptk, a subclass of Gtk.ApplicationWindow. Learn how to manage application window properties such as title, custom title bar widget, icon, and dimensions to create rich GTK+ applications.">
<meta property="og:title" content="Ptk Documentation: ApplicationWindow Widget">
<meta property="og:description" content="Explore the ApplicationWindow widget in Ptk, a subclass of Gtk.ApplicationWindow. Learn how to manage application window properties such as title, custom title bar widget, icon, and dimensions to create rich GTK+ applications.">
<meta property="og:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
<meta property="og:url" content="https://pardus.github.io/wiki/libpardus/applicationWindow">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ptk Documentation: ApplicationWindow Widget">
<meta name="twitter:description" content="Explore the ApplicationWindow widget in Ptk, a subclass of Gtk.ApplicationWindow. Learn how to manage application window properties such as title, custom title bar widget, icon, and dimensions to create rich GTK+ applications.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/pardus/pardus.github.io/main/src/lib/assets/logo.svg">
</svelte:head>

#### 2024.06.27 - [Osman Coskun](https://github.com/osmancoskun)

# Ptk Documentation: ApplicationWindow Widget

## ApplicationWindow Widget

> The `ApplicationWindow` widget is a subclass of `Gtk.ApplicationWindow` and provides additional functionality for managing an application window. It allows you to set properties such as the window title, title bar, icon, and window dimensions.

### Parameters

The `ApplicationWindow` widget accepts the following parameters with their types:

- `title` (str): The title or name of the application window.
- `titlebar` (Gtk.Widget): The custom title bar widget (optional).
- `icon_name` (str): The name of the icon to be displayed in the window title bar (optional).
- `height` (int): The height of the application window. Default is -1.
- `width` (int): The width of the application window. Default is -1.

### Basic Usage

To create an instance of the `ApplicationWindow` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create an ApplicationWindow instance
window = Ptk.ApplicationWindow(
    title="My Application",
    titlebar=my_custom_title_bar_widget,
    icon_name="app-icon",
    height=600,
    width=800,
)
```
