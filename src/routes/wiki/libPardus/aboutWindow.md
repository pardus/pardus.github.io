# Ptk Documentation: AboutWindow Widget


## AboutWindow Widget

> The `AboutWindow` widget is a graphical window that displays information about an application or software, typically used in an "About" dialog. It provides an organized layout for presenting essential details such as the application name, version, developer information, license, credits, website, etc.

### Parameters and Usage

The `AboutWindow` widget accepts the following parameters with their types:

- `application_name` (str): The name of the application or software.
- `version` (str): The version number of the application.
- `developer_name` (str): The name of the developer or organization.
- `license_type` (str): The type of license used for the application. Possible values are: "unknown", "custom", "GPL-2", "GPL-3", "LGPL-2-1", "LGPL-3-0", "BSD", "MIX-X11", "ARTISTIC", "GPL-2-0-ONLY", "GPL-3-0-ONLY", "LGPL-2-1-ONLY", "LGPL-3-0-ONLY", "AGPL-3-0", "AGPL-3-0-ONLY", "BSD-3", "APACHE-2-0", "MPL-2-0".
- `comments` (str): Additional comments or description about the application.
- `website` (str): The website URL associated with the application.
- `issue_url` (str): The issue or bug tracking URL for the application.
- `credit_section` (tuple of str, str): A tuple containing two strings - the title and content of the credit section.
- `translator_credits` (str): Credits for translators of the application.
- `copyright` (str): Copyright information for the application.
- `developers` (str): Information about the developers of the application.
- `application_icon` (GdkPixbuf.Pixbuf): The icon representing the application.
- `transient_for` (Gtk.Window): The parent window that this `AboutWindow` is transient for.
- `modal` (bool): If True, the `AboutWindow` becomes a modal dialog.

### Usage Example

To create and display an `AboutWindow`, you can use the following code snippet:

```python
from libpardus import Ptk

# Create an AboutWindow instance
about_window = Ptk.AboutWindow(
    application_name="My Awesome App",
    version="1.0",
    developer_name="John Doe",
    license_type="GPL-3",
    comments="An amazing application!",
    website="https://www.example.com",
    issue_url="https://github.com/example/myapp/issues",
    credit_section=("Contributors", "John Doe, Jane Smith"),
    translator_credits="French: Pierre Dupont, German: Hans Müller",
    copyright="(c) 2023 John Doe",
    developers="John Doe, Jane Smith",
    application_icon=application_icon,
    transient_for=parent_window,
    modal=True,
)

# Display the AboutWindow
about_window.show()
