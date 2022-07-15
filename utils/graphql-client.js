import { GraphQLClient } from 'graphql-request';
const endpoint = 'https://graphql.fauna.com/graphql';
export const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        // authorization: `Bearer ${process.env.ACCESS_TOKEN_MEGAFON}`,
         authorization: `Bearer ${'fnAErjwBDnACTElcL1EytsyocEDiuRSAezkacmEM'}`,
        'X-Schema-Preview': 'partial-update-mutation',
    },
});
