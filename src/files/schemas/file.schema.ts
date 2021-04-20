import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FileDocument = File & Document;

@Schema()
export class File {
  // @Prop({ required: true })
  // data: Buffer;
  @Prop()
  name: string;
  @Prop()
  originalname: string;
  @Prop()
  mimetype: string;
  @Prop({ default: Date.now })
  created_date: Date;
}

export const FileSchema = SchemaFactory.createForClass(File);
