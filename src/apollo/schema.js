const { gql } = require("apollo-server");

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

  type Location {
    type: String
    coordinates: [Float]
  }

  type Report {
    id: ID
    deviceId: String
    categoryId: String
    subcategoryId: String
    description: String
    location: Location
    date_created: String
  }

  input PriceReportInput {
    categoryId: String!
    subcategoryId: String!
    description: String
    locationLat: String!
    locationLng: String!
    deviceId: String!
  }

  type Query {
    # Categories
    getCategories: [Category]

    # Reports
    getReports(deviceId: String!): [Report]
  }

  type Mutation {
    addPriceReport(input: PriceReportInput): String
  }
`;

module.exports = typeDefs;
