export default class CreatePetUseCaseOutput {
  name: string;
  type: string;
  size: string;
  gender: string;
  bio: string;

  constructor(data: Partial<CreatePetUseCaseOutput>){
    Object.assign(this, data)
  }
}

