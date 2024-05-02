import { OpenApiGeneratorV3, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi'

import { healthCheckRegistry } from '@/api/healthCheck/healthCheck.routes'
import { templateRegistry } from '@/api/templates/template.routes'
import { sideBarRegistry } from '@/api/sideBar/sideBar.routes'

export function generateOpenAPIDocument() {
    const registry = new OpenAPIRegistry([healthCheckRegistry, templateRegistry, sideBarRegistry])
    const generator = new OpenApiGeneratorV3(registry.definitions)

    return generator.generateDocument({
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            title: 'Swagger API',
        },
        externalDocs: {
            description: 'View the raw OpenAPI Specification in JSON format',
            url: '/swagger.json',
        },
    })
}
