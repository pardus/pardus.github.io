<script context="module">
    import { DownloadCD, DownloadCD2, DownloadKey } from "$assets";
    export let datas = [
        {
            label: "Downloadable ISO Files",

            downloadLabel: "Download",
            iso: [
                {
                    label: "Pardus 21.4 Xfce",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21/Pardus-21.4-XFCE-amd64.iso",
                    icon: DownloadCD,
                },
                {
                    label: "Pardus 21.4 Gnome",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21/Pardus-21.4-GNOME-amd64.iso",
                    icon: DownloadCD,
                },
            ],
            keys: [
                {
                    label: "md5sums",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21/MD5SUMS",
                    icon: DownloadKey,
                },
                {
                    label: "sha256sums",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21/SHA256SUMS",
                    icon: DownloadKey,
                },
                {
                    label: "sha512sums",
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
                    label: "Pardus 21.4 Xfce Backports",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21backports/Pardus-21.4-XFCE-backports-amd64.iso",
                    icon: DownloadCD2,
                },
                {
                    label: "Pardus 21.4 Gnome Backports",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21backports/Pardus-21.4-GNOME-backports-amd64.iso",
                    icon: DownloadCD2,
                },
            ],
            keys: [
                {
                    label: "backsport m5sums",
                    url: "https://indir.pardus.org.tr/ISO/Pardus21backports/MD5SUMS",
                    icon: DownloadKey,
                },
            ],
        },
    ];
</script>
