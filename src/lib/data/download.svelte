<script context="module">
    import { DownloadCD, DownloadCD2, DownloadKey } from "$assets";
    export let datas = [
        {
            label: "Downloadable 23 ISO Files",

            downloadLabel: "Download",
            iso: [
                {
                    label: "Pardus 23.0 Xfce",
                    url: "http://indir.pardus.org.tr/ISO/Pardus23/Pardus-23.0-XFCE-amd64.iso",
                    icon: DownloadCD,
                },
                {
                    label: "Pardus 23.0 Gnome",
                    url: "http://indir.pardus.org.tr/ISO/Pardus23/Pardus-23.0-GNOME-amd64.iso",
                    icon: DownloadCD,
                }
         
            ],
            keys: [
                {
                    label: "Pardus 23 md5sums",
                    url: "https://indir.pardus.org.tr/ISO/Pardus23/MD5SUMS",
                    icon: DownloadKey,
                },
                {
                    label: "Pardus 23 sha256sums",
                    url: "https://indir.pardus.org.tr/ISO/Pardus23/SHA256SUMS",
                    icon: DownloadKey,
                },
                {
                    label: "Pardus 23 sha512sums",
                    url: "https://indir.pardus.org.tr/ISO/Pardus23/SHA512SUMS",
                    icon: DownloadKey,
                }
        
            ],
        },
        {
            label: "Downloadable 21 ISO Files",

            downloadLabel: "Download",
            iso: [
                {
                    label: "Pardus 21.5 Xfce",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21/Pardus-21.5-XFCE-amd64.iso",
                    icon: DownloadCD,
                },
                {
                    label: "Pardus 21.5 Gnome",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21/Pardus-21.5-GNOME-amd64.iso",
                    icon: DownloadCD,
                },
            ],
            keys: [
         
                {
                    label: "Pardus 21 md5sums",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21/MD5SUMS",
                    icon: DownloadKey,
                },
                {
                    label: "Pardus 21.5 sha256sums",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21/SHA256SUMS",
                    icon: DownloadKey,
                },
                {
                    label: "Pardus 21.5 sha512sums",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21/SHA512SUMS",
                    icon: DownloadKey,
                },
            ],
        },
        {
            label: "Downloadable Backports ISO Files",

            downloadLabel: "Download",

            iso: [
                {
                    label: "Pardus 21.5 Xfce Backports",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21backports/Pardus-21.5-XFCE-backports-amd64.iso",
                    icon: DownloadCD2,
                },
                {
                    label: "Pardus 21.5 Gnome Backports",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21backports/Pardus-21.5-GNOME-backports-amd64.iso",
                    icon: DownloadCD2,
                },
            ],
            keys: [
                {
                    label: "backports md5sums",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21backports/MD5SUMS",
                    icon: DownloadKey,
                },
            ],
        },
    ];
</script>
