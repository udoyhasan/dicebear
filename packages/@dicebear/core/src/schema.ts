import { JSONSchema7 } from 'json-schema';

export const schema: JSONSchema7 = {
  type: 'object',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Options',
  properties: {
    seed: {
      type: 'string',
    },
    dataUri: {
      type: 'boolean',
      default: false,
    },
    flip: {
      type: 'boolean',
      default: false,
    },
    rotate: {
      type: 'integer',
      minimum: 0,
      maximum: 360,
      default: 0,
    },
    scale: {
      type: 'integer',
      minimum: 0,
      maximum: 200,
      default: 100,
    },
    radius: {
      type: 'integer',
      minimum: 0,
      maximum: 50,
      default: 0,
    },
    size: {
      type: 'integer',
      minimum: 1,
    },
    backgroundColor: {
      type: 'array',
      uniqueItems: true,
      items: {
        anyOf: [
          {
            type: 'string',
            pattern: '^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$',
          },
          {
            type: 'string',
            pattern: '^[0-9a-zA-Z]+$',
          },
        ],
      },
    },
    translateX: {
      type: 'integer',
      minimum: -100,
      maximum: 100,
      default: 0,
    },
    translateY: {
      type: 'integer',
      minimum: -100,
      maximum: 100,
      default: 0,
    },
    clip: {
      type: 'boolean',
      default: true,
    },
  },
  additionalProperties: false,
};
