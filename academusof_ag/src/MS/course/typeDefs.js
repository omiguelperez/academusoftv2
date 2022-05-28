export const courseTypeDef = `
   
  type Course {
    id:String! 
    name: String!
    code: String!
    credits: Int!
  }
  input CourseInput {
    name: String!
    code: String!
    credits: Int!
  }
  input CourseInputUpdate {
    name: String!
    credits: Int!
  }`;

export const courseQueries = `
      allCourse: [Course]!
      courseById(id: Int!): Course!
  `;

export const courseMutations = `
    createCourse(Course: CourseInput!): Course!
    updateCourse(id: String!, Course: CourseInputUpdate!): Course!
    deleteCourse(id: String!): Int
`;
