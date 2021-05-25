const { gql } = require('apollo-server');

const typeDefs = gql`
  type Category {
    id: ID
    order: Int
    name: Language
    icon: String
    requireDescription: Boolean
    subcategories: [Subcategory]
  }

  type Language {
    es: String
    en: String
  }

  type Subcategory {
    name: String
    icon: String
  }

  type Query {
    getCategories: [Category]
  }
`;

module.exports = typeDefs;