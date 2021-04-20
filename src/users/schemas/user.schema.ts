import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { File } from 'src/files/schemas/file.schema';

export type UserDocument = User & mongoose.Document;

@Schema({ toJSON: { virtuals: true } })
export class User {
  @Prop({ required: true, unique: true, index: true })
  username: string;

  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  surname: string;

  @Prop({ required: true, unique: true, index: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'File' })
  picture: File;

  @Prop({ default: Date.now })
  created: Date;

  // @Prop()
  // role_id: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
