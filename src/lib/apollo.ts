import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4opugyk0s9k01xk3c6p8leh/master',
    cache: new InMemoryCache()

})