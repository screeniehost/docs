import { usePaths } from 'vitepress-openapi'

export default {
    async paths() {
        const spec = await import('../../../public/openapi.json', {
            with: { type: 'json' }
        }).then(module => module.default)

        return usePaths({ spec })
            .getPathsByVerbs()
            .map(({ operationId, summary }) => {
                return {
                    params: {
                        operationId,
                        pageTitle: `${summary}`,
                    },
                }
            })
    },
}