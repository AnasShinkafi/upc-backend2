import { IsEmail, IsString } from "class-validator";

export class UpdateAddressDto {
    @IsString()
    address: string;

    @IsEmail()
    email_1: string;

    @IsEmail()
    email_2: string;

    @IsString()
    phone_number: string;

    @IsString()
    telephone: string;
}