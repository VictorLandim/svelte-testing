<script lang="ts">
    import favicon from "$lib/assets/favicon.svg"

    var { children } = $props()
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
