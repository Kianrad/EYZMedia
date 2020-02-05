import { Document, Model, model, Schema } from "mongoose";
import { IMedia } from "../Interfaces/IMedia";

export interface IMediaModel extends IMedia, Document {}

export const MediaSchema: Schema = new Schema({
  SKU: String,
  store: [{ type: String }],
  Name: String,
  Original_Title: String,
  Linzenzstart: Date,
  Linzenende: Date,
  stream_id: String,
  Status: String,
  Archive_Status: String,
  start_date: Date,
  end_date: Date,
  local_path: String,
  external_path: String
});

MediaSchema.pre("save", next => {
  // let now = new Date();
  // if (!this.s) {
  //   this.createdAt = now;
  // }
  next();
});

export const Media: Model<IMediaModel> = model<IMediaModel>(
  "Media",
  MediaSchema
);
