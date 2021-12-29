export interface ContactMethod {
  email: boolean,
  post: boolean,
  sms: boolean,
}

export interface Profile {
  firstName: string,
  lastName: string,
  email: string,
  gender: string,
  contactMethod: ContactMethod,
  description: string,
}
