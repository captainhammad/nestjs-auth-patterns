import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty({ message: 'Please Enter a valid Email' })
  readonly username: string;

  @IsNotEmpty({ message: 'Please Enter Password' })
  @Length(6, 50, {
    message: 'Password length Must be between 6 and 50 charcters',
  })
  readonly password: string;
}
//A data transfer object, commonly called a DTO, is an object used to validate data and define data structure sent into your Nest applications.
// a DTO is a simple object that contains data and may have some validation logic.
