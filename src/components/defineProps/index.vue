<script lang="ts" setup>
const {title} = defineProps({
    title: String
}) as {title: string}
</script>
<template>
<div>
    <header class="bg-white">{{ title }}</header>
</div>
</template>