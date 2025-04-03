// src/graphql/resolvers/fireRiskDataResolver.js
const { generateFireRiskData } = require('../../utils/randomDataGenerator');

const resolvers = {
    Query: {
        getAllFireRiskData: (_, { count }) => {
            return generateFireRiskData(count);
        },

        getFireRiskDataByLocation: (_, { location, count }) => {
            return generateFireRiskData(count, { location });
        },

        getHighRiskFireData: (_, { threshold, count }) => {
            // Generamos más datos para asegurar obtener los de alto riesgo
            const allData = generateFireRiskData(count * 3);
            return allData
                .filter(item => item.fireRisk >= threshold)
                .slice(0, count)
                .sort((a, b) => b.fireRisk - a.fireRisk);
        },

        getChiquitosFireRiskData: (_, { count }) => {
            return generateFireRiskData(count, { idPrefix: 'CHQ' });
        }
    }
};

module.exports = resolvers;