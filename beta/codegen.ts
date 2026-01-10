/* Dependencies */
import type { CodegenConfig } from '@graphql-codegen/cli'
import type { TypeScriptPluginConfig } from '@graphql-codegen/typescript'
import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations'

const typeScriptPluginConfig: TypeScriptPluginConfig = {
  immutableTypes: true,
  namingConvention: {
    enumValues: 'keep',
  },
  scalars: {
    DateTime: 'string',
  },
  useTypeImports: true,
}

const typeScriptDocumentsPluginConfig: TypeScriptDocumentsPluginConfig = {
  ...typeScriptPluginConfig,
}

const config: CodegenConfig = {
  generates: {
    'src/generated/contentful.ts': {
      schema: {
        [`${process.env.CONTENTFUL_HOST}/spaces/${process.env.CONTENTFUL_SPACE_ID}`]:
          {
            headers: {
              Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
            },
          },
      },
      documents: ['src/**/**.graphql'],
      plugins: [
        {
          add: {
            placement: 'prepend',
            content: '/* eslint-disable */\n',
          },
        },
        {
          typescript: typeScriptPluginConfig,
        },
        {
          'typescript-operations': typeScriptDocumentsPluginConfig,
        },
        'typescript-graphql-request',
      ],
    },
  },
}

export default config
