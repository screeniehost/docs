---
aside: false
outline: false
title: ''
---

<script setup lang="ts">
import { useRoute } from 'vitepress'

const route = useRoute()

const operationId = route.data.params.operationId
const pageTitle = route.data.params.pageTitle

document.title = `${pageTitle} | screenie Docs`
</script>

<OAOperation :operationId="operationId" />