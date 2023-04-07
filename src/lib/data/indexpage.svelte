<script context="module">
    import {
        PardusSoftware,
        PardusMyComputer,
        PardusImageWriter,
        PardusPowerManager,
        PardusPackageInstaller,
        PardusJavaInstaller,
    } from "$assets";
    export let datas = {
        en: {
            title: "Pardus is a Debian Stable based operating system. <br />It combines stability, efficiency and end-user needs.",
            description:
                "There are two main versions of Pardus; Pardus Gnome and Pardus Xfce. Pardus comes pre-installed with basic packages and Pardus applications. Also you can install many applications with Pardus Software Center.",
            appsHeader: "Applications Developed by Pardus Core Team",
            apps: [
                {
                    icon: PardusMyComputer,
                    title: "My Computer",
                    description:
                        "shows general information about your computer. ",
                    url: "https://apps.pardus.org.tr/app/pardus-mycomputer",
                },
                {
                    icon: PardusImageWriter,
                    title: "Image Writer",
                    description:
                        "Simple Gtk+ and Python based Disk Image USB burner",
                    url: "https://apps.pardus.org.tr/app/pardus-mycomputer",
                },
                {
                    icon: PardusPowerManager,
                    title: "Power Manager",
                    description: "Power management tools for pardus",
                    url: "https://apps.pardus.org.tr/app/pardus-mycomputer",
                },
                {
                    icon: PardusPackageInstaller,
                    title: "Package Installer",
                    description:
                        "Simple tool to view and install local deb files. ",
                    url: "https://apps.pardus.org.tr/app/pardus-mycomputer",
                },
                {
                    icon: PardusJavaInstaller,
                    title: "Java Installer",
                    description: "Install & Manage Java versions easily.",
                    url: "https://apps.pardus.org.tr/app/pardus-java-installer",
                },
                {
                    icon: PardusSoftware,
                    title: "Software Center",
                    description: "Install & Manage Java versions easily.",
                    url: "https://apps.pardus.org.tr",
                },
            ],
        },
        tr: {
            title: "Pardus, Debian Stable tabanlı bir işletim sistemidir. <br />Kararlılık, verimlilik ve son kullanıcı ihtiyaçlarını birleştirir.",
            description:
                "Pardus'un iki ana versiyonu vardır; Pardus Gnome ve Pardus Xfce. Pardus, temel paketler ve Pardus uygulamaları önceden yüklenmiş olarak gelir. Ayrıca Pardus Software Center ile birçok uygulamayı kurabilirsiniz.",
            appsHeader:
                "Pardus Altyapı Ekibi Tarafından Geliştirilen Uygulamalar",
            apps: [
                {
                    icon: PardusMyComputer,
                    title: "Bilgisayarım",
                    description:
                        "bilgisayarınız hakkında genel bilgileri gösterir.",
                    url: "https://apps.pardus.org.tr/app/pardus-mycomputer",
                },
                {
                    icon: PardusImageWriter,
                    title: "Disk Kalıbı Yazıcı",
                    description:
                        "Basit Gtk+ ve Python tabanlı Disk Görüntüsü USB yazıcı",
                    url: "https://apps.pardus.org.tr/app/pardus-mycomputer",
                },
                {
                    icon: PardusPowerManager,
                    title: "Güç Yöneticisi",
                    description: "Pardus için güç yönetimi araçları",
                    url: "https://apps.pardus.org.tr/app/pardus-mycomputer",
                },
                {
                    icon: PardusPackageInstaller,
                    title: "Paket Kurucu",
                    description:
                        "Yerel deb dosyalarını görüntülemek ve yüklemek için basit bir araç.",
                    url: "https://apps.pardus.org.tr/app/pardus-mycomputer",
                },
                {
                    icon: PardusJavaInstaller,
                    title: "Java Kurucu",
                    description: "Java sürümlerini kolayca kurun ve yönetin.",
                    url: "https://apps.pardus.org.tr/app/pardus-java-installer",
                },
                {
                    icon: PardusSoftware,
                    title: "Mağaza",
                    description: "Pardus için uygulama mağazası",
                    url: "https://apps.pardus.org.tr",
                },
            ],
        },
    };
</script>
