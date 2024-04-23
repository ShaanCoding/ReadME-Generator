import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi'
import { z } from 'zod'

extendZodWithOpenApi(z)

// This is what we would use to
// export type WaitListUser = z.infer<typeof WaitListUserSchema>

export type User = z.infer<typeof UserSchema>

export const UserSchema = z.object({
    name: z.string(),
    url: z.object({
        url: z.string().url(),
        // z.enum(['Facebook', 'Instagram', 'Twitter', 'Github', 'LinkedIn', 'Other']),
        _type: z.string(),
    }),
})

export const TagSchema = z.object({
    name: z.string(),
    url: z.string(),
})

export type Template = z.infer<typeof TemplateSchema>

export const TemplateSchema = z.object({
    title: z.string(),
    description: z.string(),
    author: UserSchema,
    contributors: z.array(UserSchema),
    startupBlocks: z.array(z.string()),
    image: z.string().url(),
    dateCreated: z.date(),
    lastUpdated: z.date(),
    tags: z.array(TagSchema),
    featured: z.boolean(),
    folder: z.string(),
})

export type Object = z.infer<typeof ObjectSchema>

export const ObjectSchema = z
    .object({
        label: z.string(),
        name: z.string(),
        _type: z.string(),
    })
    .optional()

export type Variable = z.infer<typeof VariableSchema>

export const VariableSchema = z.object({
    label: z.string(),
    name: z.string(),
    defaultValue: z.union([z.string(), z.boolean(), z.array(z.string()), z.record(z.any())]),
    // z.enum(['text', 'boolean', 'array']),
    _type: z.string(),
    listSchema: z.array(ObjectSchema).optional(),
    objectSchema: z.array(ObjectSchema).optional(),
    optionsList: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
})

export type IFunction = z.infer<typeof FunctionSchema>

export const FunctionSchema = z.object({
    name: z.string(),
    description: z.string(),
    function: z.string(),
    variables: z.array(VariableSchema),
})

export type FullTemplate = z.infer<typeof FullTemplateSchema>

export const FullTemplateSchema = z.object({
    ...TemplateSchema.shape,
    functions: z.array(FunctionSchema),
})
