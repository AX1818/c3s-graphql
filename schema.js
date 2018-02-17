export default `
    type Query {
        photos: [Photo]
    }
    
    type Photo {
        id: ID!,
        name: String!,
        category: Int!,
        price: Float!,
        tags: [String],
        urls: [String!]
    }
`;
