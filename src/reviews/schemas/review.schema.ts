import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type ReviewDocument = Review & mongoose.Document;

class Rating {
  @Prop({ required: true, min: 0, max: 5 })
  cost: number;

  @Prop({ required: true, min: 0, max: 5 })
  time: number;

  @Prop({ required: true, min: 0, max: 5 })
  report: number;

  @Prop({ required: true, min: 0, max: 5 })
  communication: number;

  @Prop({ required: true, min: 0, max: 5 })
  consistency: number;

  @Prop({ required: true, min: 0, max: 5 })
  detail: number;
}

@Schema({ autoCreate: false })
export class Review {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  author_id: User;

  @Prop({ default: Date.now })
  posted: Date;

  @Prop({ required: true })
  comment: string;

  @Prop()
  rating: Rating;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
