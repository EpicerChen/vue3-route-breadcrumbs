<template>
    <span class="breadcrumbs" :class="'breadcrumbs-' + i"
        v-for="(el, i) in nameDictionary != undefined ? map(nodes, nameDictionary) : nodes" :key="i">
        <span class="symbol" v-if="i > 0" v-html="symbol" />
        <button class="item" @click="goTo(i)">
            {{ el }}
        </button>
    </span>
</template>

<script setup lang="ts">
import { computed, withDefaults, defineProps } from "vue";
import { RouteLocationNormalizedLoaded, Router } from "vue-router";

const props = withDefaults(
    defineProps<{
        route: RouteLocationNormalizedLoaded;
        router: Router;
        symbol?: string;
        nameDictionary?: {
            [key: string]: string
        };
    }>(),
    {
        symbol: " > ",
    })

const fullpath = computed(() => { return props.route.fullPath })
const nodes = computed(() => {
    const rootName = "/"
    if (fullpath.value == "/") return [rootName]

    let nodes = fullpath.value.split("/")
    nodes[0] = rootName
    return nodes
})

const map = (
    items: string[],
    nameDictionary: { [key: string]: string }) =>
    items.map((el) =>
        nameDictionary[el] != undefined ? nameDictionary[el] : el)

const goTo = (endIndex: number) => {
    nodes.value[0] = ""
    let path = nodes.value.slice(0, endIndex + 1).join("/")
    // eslint-disable-next-line vue/no-mutating-props
    props.router.push(path == "" ? "/" : path)
}
</script>

<style>
.breadcrumbs .item {
    background-color: transparent;
    border-style: none;
}
</style>