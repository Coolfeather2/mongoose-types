import { IsMongoId, IsString, ValidateNested } from 'class-validator';
import { File } from 'src/files/schemas/file.schema';
import { Review } from 'src/reviews/schemas/review.schema';
import { User } from 'src/users/schemas/user.schema';

class Name {
  @IsString()
  title: string;
  @IsString()
  firstname: string;
  @IsString()
  surname: string;
}
class Contact {
  @IsString()
  type: 'Email' | 'Office' | 'Mobile' | 'Fax';
  @IsString()
  status: 'Primary' | 'Secondary' | 'Emergency' | 'Do not use' | 'None';
}

class Address {
  @IsString()
  type: 'Home' | 'Office' | 'Post Box' | 'DX';
  @IsString()
  status: 'Primary' | 'Secondary' | 'Emergency' | 'Do not use' | 'None';
}

export class CreatePersonDto {
  @ValidateNested()
  readonly name: Name;
  @IsMongoId()
  readonly picture?: string;
  @ValidateNested({ each: true })
  readonly contact?: Contact[];
  @ValidateNested({ each: true })
  readonly address?: Address[];
  @IsString()
  readonly specialty?: string;
  @IsString()
  readonly subspecialty?: string;
  @IsString()
  readonly notes?: string;
  @IsString()
  readonly website?: string;
  @ValidateNested({ each: true })
  readonly reviews?: Review[];
  @IsMongoId({ each: true })
  readonly files?: File[];
  @IsMongoId()
  readonly created_by: User;
}
