import { rest } from 'msw';

const login = ['setId', 'setPassword'];

export const handlers = [

  rest.post('/api/v1//auth/signin', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(login));
  })
];