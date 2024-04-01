import { EnvKeyConfig, EnvSchemaValue } from './types';

export function normalize(schemaValue: EnvSchemaValue): EnvKeyConfig {
    return 'type' in schemaValue
        ? {
              type: schemaValue.type,
              optional: 'optional' in schemaValue ? schemaValue.optional : true,
              default: 'default' in schemaValue ? schemaValue.default : undefined,
              empty: 'empty' in schemaValue ? schemaValue.empty : undefined,
          }
        : {
              type: schemaValue,
              optional: false,
          };
}
