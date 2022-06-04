export const studentTypeDef = `
   
  type Student {
    id:Int! 
    username: String!
    name: String!
    nuip: String!
  }
  input StudentInput {
    username: String!
    name: String!
    nuip: String!
  }
  `;

export const studentQueries = `
      allStudent: [Student]!
      studentById(id: Int!): Student!
  `;

export const studentMutations = `
    createStudent(Student: StudentInput!): Student!
    updateStudent(id: Int!, Student: StudentInput!): Student!
    deleteStudent(id: Int!): Int
`;
