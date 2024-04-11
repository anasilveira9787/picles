export default class CreatePetUseCaseInput {
  id: string;
  name: string;
  type: string;
  size: string;
  photo: string;
  gender: string;
  bio: string;

  constructor(data: Partial<CreatePetUseCaseInput>){
    Object.assign(this, data)
  }
}

