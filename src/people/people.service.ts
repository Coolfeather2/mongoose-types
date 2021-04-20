import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person, PersonDocument } from './schemas/people.schema';

@Injectable()
export class PeopleService {
  constructor(
    @InjectModel(Person.name) private personModel: Model<PersonDocument>,
  ) {}

  create(createPersonDto: CreatePersonDto) {
    const createdPerson = new this.personModel(createPersonDto);
    return createdPerson.save();
    // return 'This action adds a new person';
  }

  findAll() {
    return this.personModel.find().exec();
    // return `This action returns all people`;
  }

  async findOne(id: string) {
    const person = await this.personModel.findById(id).exec();
    if (!person) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return person;
    // return `This action returns a #${id} person`;
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    const existingPerson = await this.personModel
      .findOneAndUpdate({ _id: id }, { $set: updatePersonDto }, { new: true })
      .exec();
    if (!existingPerson) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return existingPerson;
    // return `This action updates a #${id} person`;
  }

  async remove(id: string) {
    const person = await this.findOne(id);
    return person.remove();
    // return `This action removes a #${id} person`;
  }
}
