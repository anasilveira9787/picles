export default class PetTokens {
  static fileService(fileService: any): (target: typeof import("./usecases/get.pets.usecase").default, propertyKey: undefined, parameterIndex: 1) => void {
    throw new Error("Method not implemented.");
  }
  static createPetUseCase = 'createPetUseCase';
  static getPetByIdUseCase = 'getPetByIdUseCase';
  static getPetsUseCase = 'getPetsUseCase';
  static deletePetByIdUseCase = 'deletePetByIdUseCase';
  static updatePetByIdUseCase = 'updatePetByIdUseCase';
  static updatePetPhotoByIdUseCase = 'UpdatePetPhotoByIdUseCase';
  static petRepository = 'petRepository';
}
