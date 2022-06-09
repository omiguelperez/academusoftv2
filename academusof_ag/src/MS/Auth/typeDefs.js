export const AuthTypeDef = `
   
  type Auth {
    token: String!
    username: String!
    password: String!
  }
  input AuthInput {
    username: String!
    password: String!
  }

  type AuthResponse {
    token: String!
  }
  
  `;

export const AuthQueries = `
  `;

export const authMutations = `
      login(Auth: AuthInput!): Auth!

`;
