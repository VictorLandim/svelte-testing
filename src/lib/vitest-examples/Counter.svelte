<script lang="ts">
    var count = $state(0)

    function decrement() {
        count -= 1
    }
    function increment() {
        count += 1
    }

    function clear() {
        count = 0
    }
</script>

<h1>{count}</h1>
<button class="decrement-button" onclick={decrement}>decrement</button>
<button class="clear-button" onclick={clear}>clear</button>
<button class="increment-button" onclick={increment}>incremenet</button>

<style>
    .counter-button {
        font-family: monospace;
        font-size: 24px;
        padding: 10px 20px;
        color: #335d92;
        background-color: rgba(68, 107, 158, 0.1);
        border-radius: 10px;
        border: 2px solid rgba(68, 107, 158, 0);
        outline: none;
        width: 200px;
        cursor: pointer;
    }

    .counter-button:focus {
        border: 2px solid #335d92;
    }

    .counter-button:active {
        background-color: rgba(68, 107, 158, 0.2);
    }
</style>
