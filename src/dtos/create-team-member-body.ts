/* eslint-disable prettier/prettier */
import { IsNotEmpty, Length } from "class-validator";

// criando class para representar o body da nossa requisição
export class CreateTeamMemberBody {
  @IsNotEmpty() // Obrigatório
  @Length(5, 100) // deve ter entre 5-10 caracteres
  name: string; 
  
  @IsNotEmpty({
    message: 'The member function should not be empty.'
  })
  function: string;
}
