# Ptk Documentation: App Widget

## App Widget

> The `App` widget is responsible for creating an application instance and managing its main window. It is based on the `Adw.Application` class and provides additional functionality to set properties such as the application ID, title, window dimensions, and CSS file path.

### Parameters

The `App` widget accepts the following parameters with their types:

- `application_id` (str): The unique identifier for the application.
- `title` (str): The title or name of the application.
- `height` (int): The height of the main application window. Default is -1.
- `width` (int): The width of the main application window. Default is -1.
- `css_file_path` (str): The path to a CSS file for styling the application (optional).

### Basic Usage

To create an instance of the `App` widget and set its properties, you can use the following code snippet:

```python
from libpardus import Ptk

# Create an App instance
app = Ptk.App(
    application_id="com.example.myapp",
    title="My Awesome App",
    height=600,
    width=800,
    css_file_path="path/to/css/file.css",
)
