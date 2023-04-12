
/**
 * @roxi/routify 2.18.11
 * File generated Wed Apr 12 2023 12:41:29 GMT+0300 (GMT+03:00)
 */

export const __version = "2.18.11"
export const __timestamp = "2023-04-12T09:41:29.971Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/contact/index",
          "id": "_contact_index",
          "component": () => import('../src/pages/contact/index.svelte').then(m => m.default)
        }
      ],
      "path": "/contact"
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/download/index",
          "id": "_download_index",
          "component": () => import('../src/pages/download/index.svelte').then(m => m.default)
        }
      ],
      "path": "/download"
    },
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "ext": "md",
          "isIndex": true,
          "isPage": true,
          "path": "/wiki/index",
          "id": "_wiki_index",
          "component": () => import('../src/pages/wiki/index.md').then(m => m.default)
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "ext": "md",
              "isPage": true,
              "path": "/wiki/system/01-installation",
              "id": "_wiki_system_01Installation",
              "component": () => import('../src/pages/wiki/system/01-installation.md').then(m => m.default)
            },
            {
              "ext": "md",
              "isPage": true,
              "path": "/wiki/system/02-after-install",
              "id": "_wiki_system_02AfterInstall",
              "component": () => import('../src/pages/wiki/system/02-after-install.md').then(m => m.default)
            },
            {
              "ext": "md",
              "isPage": true,
              "path": "/wiki/system/03-yusuf-duzgun",
              "id": "_wiki_system_03YusufDuzgun",
              "component": () => import('../src/pages/wiki/system/03-yusuf-duzgun.md').then(m => m.default)
            },
            {
              "ext": "md",
              "isIndex": true,
              "isPage": true,
              "path": "/wiki/system/index",
              "id": "_wiki_system_index",
              "component": () => import('../src/pages/wiki/system/index.md').then(m => m.default)
            }
          ],
          "path": "/wiki/system"
        }
      ],
      "isLayout": true,
      "path": "/wiki",
      "id": "_wiki__layout",
      "component": () => import('../src/pages/wiki/_layout.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

