<script context="module">
  import { PardusSoftware } from "$assets";
  export let datas = {
    title:
      "Pardus is a Debian based stable operating system. <br />It combines stability, modern and end-user needs.",
    description:
      "There are two main versions of Pardus; Pardus Gnome and Pardus Xfce. Pardus comes with pre-installed basic packages and Pardus applications. Also you can install many applications with Pardus Software Center.",
    appsHeader: "Applications Developed by Pardus Core Team",
    downloadLabel: "Get Started",
    apps: [
      {
        icon: "https://apps.pardus.org.tr/files/appicons/pardus-mycomputer.svg",
        title: "My Computer",
        description:
          "Displays disk information and provides access to folders, files, and devices.",
        url: "https://apps.pardus.org.tr/app/pardus-mycomputer",
      },
      {
        icon: "https://apps.pardus.org.tr/files/appicons/pardus-image-writer.svg",
        title: "Image Writer",
        description: "A simple disk image USB writer based on Gtk+ and Python.",
        url: "https://apps.pardus.org.tr/app/pardus-image-writer",
      },
      {
        icon: "https://apps.pardus.org.tr/files/appicons/pardus-power-manager.svg",
        title: "Power Manager",
        description: "Power management tool for Pardus.",
        url: "https://apps.pardus.org.tr/app/pardus-power-manager",
      },
      {
        icon: "https://apps.pardus.org.tr/files/appicons/pardus-package-installer.svg",
        title: "Package Installer",
        description:
          "A simple tool for viewing and installing local deb files.",
        url: "https://apps.pardus.org.tr/app/pardus-package-installer",
      },
      {
        icon: "https://apps.pardus.org.tr/files/appicons/pardus-java-installer.svg",
        title: "Java Installer",
        description: "Easily install and manage Java versions.",
        url: "https://apps.pardus.org.tr/app/pardus-java-installer",
      },
      {
        icon: PardusSoftware,
        title: "Software Center",
        description: "Install, remove, and update applications from our store.",
        url: "https://apps.pardus.org.tr",
      },
    ],
  };
</script>
