import { faker } from '@faker-js/faker';

type StudyRequest = {
  name: string;
  organizationId: string;
};

function generateStudyRequest(): StudyRequest {
  return {
    name: faker.company.name(),
    organizationId: faker.string.uuid(),
  };
}

export const myFaker = {
  study_requests: Array.from({ length: 10 }, generateStudyRequest)
};

