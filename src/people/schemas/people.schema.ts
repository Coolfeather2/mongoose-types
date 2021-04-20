import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { File } from 'src/files/schemas/file.schema';
import { Review } from 'src/reviews/schemas/review.schema';
import { User } from 'src/users/schemas/user.schema';

export type PersonDocument = Person & mongoose.Document;

class Name {
  @Prop()
  title: string;
  @Prop({ required: true })
  firstname: string;
  @Prop({ required: true })
  surname: string;
}

class Contact {
  @Prop()
  type: 'Email' | 'Office' | 'Mobile' | 'Fax';
  @Prop()
  status: 'Primary' | 'Secondary' | 'Emergency' | 'Do not use' | 'None';
}

class Address {
  @Prop()
  type: 'Home' | 'Office' | 'Post Box' | 'DX';
  @Prop()
  status: 'Primary' | 'Secondary' | 'Emergency' | 'Do not use' | 'None';
}

@Schema()
export class Person {
  @Prop()
  name: Name;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'File' })
  picture: File;
  @Prop()
  contact: Contact[];
  @Prop()
  address: Address[];
  @Prop()
  specialty: string;
  @Prop()
  subspecialty: string;
  @Prop()
  notes: string;
  @Prop()
  website: string;
  @Prop()
  reviews: Review[];
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }] })
  files: File[];
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    required: true,
  })
  created_by: User;
  @Prop({ default: Date.now })
  created_date: Date;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
