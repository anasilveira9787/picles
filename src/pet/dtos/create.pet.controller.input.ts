import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MaxLength } from "class-validator";

export default class CreatePetControllerInput {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'Name of the pet'})
    name: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'Type of the pet'})
    type: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'Size of the pet: small | medium | large | extra-large'})
    size: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'Gender of the pet: male | female | unknown'})
    gender: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(1024)
    @ApiProperty({description:'Biography of the pet. max 1024'})
    bio: string;
}

