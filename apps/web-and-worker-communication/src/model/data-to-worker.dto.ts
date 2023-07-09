import { IsNotEmpty, IsString } from 'class-validator';

export interface IDataToWorkerDTO {
  message: String;
}

export class DataToWorkerDTO implements IDataToWorkerDTO {
  @IsString()
  @IsNotEmpty()
  message: String;

  toJson(): IDataToWorkerDTO {
    return {
      message: this.message,
    };
  }

  static newInstanceFromJson(data: IDataToWorkerDTO) {
    console.log('newInstanceFromJson >> ', data);
    const result = new DataToWorkerDTO();
    result.message = data.message;

    return result;
  }
}
