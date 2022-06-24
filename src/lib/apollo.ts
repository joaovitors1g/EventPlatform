import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4t1io8g2xty01z69t5c3wud/master',
  cache: new InMemoryCache(),
});
