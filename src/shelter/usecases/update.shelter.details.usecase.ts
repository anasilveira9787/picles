import UpdateShelterDetailsUseCaseInput from "../dtos/update.shelter.usecase.input";
import UpdateShelterDetailsUseCaseOutput from "../dtos/update.shelter.usecase.output";
import { IUseCase } from "src/domain/iusecase.interface";
import { ShelterRepository } from "../shelter.repository";
import IShelterRepository from "../interfaces/shelter.repository.interface";
import ShelterTokens from "../shelter.tokens";
import { Inject } from "@nestjs/common";

export default class UpdateShelterDetailsUsecase implements IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput> {

    constructor(
        @Inject(ShelterTokens.shelterRepository)
        private readonly ShelterRepository: IShelterRepository
    ){}

    async run(
        input: UpdateShelterDetailsUseCaseInput): 
        Promise<UpdateShelterDetailsUseCaseOutput>{

        await this.ShelterRepository.update(input)

        const shelter = await this.ShelterRepository.get()

        return new UpdateShelterDetailsUseCaseOutput({
            name: shelter.name,
            phone: shelter.phone,
            whatsapp: shelter.whatsApp,
            email: shelter.email,
            updatedAt: shelter.updatedAt,
            createdAt: shelter.createdAt
        })
    } 
    

}

