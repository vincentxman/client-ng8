import gql from "graphql-tag";

export const getAllCats_gql = gql`
query getCats($limit: Int!) {
  cats(limit: $limit) {
    id
    name
    age
    breed
  }
}
`;

export const updateCat_gql = gql`
mutation createCat($catDt: CatDto!){
  createCat(catDto: $catDt){
    id
    name
    age
    breed
  }
}
`;
