// src/graphql/schemas/fireRiskDataSchema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Coordinates {
        lat: Float!
        lng: Float!
    }
    
    type Weather {
        temperature: Float!
        humidity: Int!
        windSpeed: Float!
        windDirection: Int
        precipitation: Float
        season: String
    }
    
    type EnvironmentalFactors {
        droughtIndex: Float
        vegetationType: String
        vegetationDryness: Int
        humanActivityIndex: Int
        regionalFactor: Float
    }
    
    type FireRiskData {
        id: ID!
        timestamp: String!
        location: String!
        coordinates: Coordinates!
        weather: Weather!
        environmentalFactors: EnvironmentalFactors!
        fireRisk: Float!
        fireDetected: Boolean!
    }
    
    type Query {
        getAllFireRiskData(count: Int = 10): [FireRiskData!]!
        getFireRiskDataByLocation(location: String!, count: Int = 5): [FireRiskData!]!
        getHighRiskFireData(threshold: Float = 75, count: Int = 5): [FireRiskData!]!
        getChiquitosFireRiskData(count: Int = 10): [FireRiskData!]!
    }
`;

module.exports = typeDefs;