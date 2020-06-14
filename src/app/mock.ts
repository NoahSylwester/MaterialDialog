export const EMPLOYEEDETAILS_MOCK: EmployeeDetails = {
  //basic info
    contactName: 'Carrie Conway',
    dateOfBirth: new Date('February 7, 1990'),
    maskedSocialSecurity: '*1234',
    employmentStatus: 'Part-Time',
    hireDate: new Date('January 15, 2019'),
  //addresses
    streetAddress: {
      addressLine1: '12345 Aldergrove Street',
      addressLine2: null,
      city: 'Portland',
      state: 'OR',
      zip: '97217',
    },
    mailingAddress: {
      addressLine1: null,
      addressLine2: null,
      city: null,
      state: null,
      zip: null,
    },
  //contact info
    personalEmail: null,//'carrieconway@gmail.com',
    workEmail: 'carrie.conway@work.com',
    mobilePhone: '555-555-5555',
    workPhone: null,//'222-222-2222',
  //legal info
    genderDescription: 'Female',
    medicareEligible: null,
    smoker: null,
    disabled: null,
    student: null,
  };
  
  export class EmployeeDetails {
    contactName: string;
    dateOfBirth: Date;
    maskedSocialSecurity: string;
    employmentStatus: string;
    hireDate: Date;
    streetAddress: {
      addressLine1: string,
      addressLine2: string,
      city: string,
      state: string,
      zip: string,
    };
    mailingAddress: {
      addressLine1: string,
      addressLine2: string,
      city: string,
      state: string,
      zip: string,
    };
    personalEmail: string;
    workEmail: string;
    mobilePhone: string;
    workPhone: string;
    genderDescription: string;
    medicareEligible: boolean;
    smoker: boolean;
    disabled: boolean;
    student: boolean;
  }