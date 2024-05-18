<script>
    import { url, isActive, node as nodeHelper } from '@roxi/routify'
    export let node
    node = node || $nodeHelper.root
    /**
     * Basic unstyled navigation. Feel free to style it as you wish.
     *
     * _node is the current node.
     * _node.linkableChildren is the current node's children.
     * $url creates an URL from a node path.
     * $isActive checks if a node is part of the current URL.
     **/
</script>

<ul>
    <!-- iterates over each child page -->
    {#each node.linkableChildren as childNode}
        <!-- if the child is active, adds the isActive class -->
        <li class:isActive={$isActive(childNode.path)}>
            <a href={$url(childNode.path)}>
                <!-- title can be overwritten using `meta.title` -->
                {childNode.title}
            </a>
            {#if childNode.linkableChildren.length > 0}
                <svelte:self node={childNode} />
            {/if}
        </li>
    {/each}
</ul>