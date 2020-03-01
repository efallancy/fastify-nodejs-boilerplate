import joi from '@hapi/joi';

export const greetBodySchema = joi.object({
  name: joi.string().required(),
});
