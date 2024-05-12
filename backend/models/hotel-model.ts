import mongoose, { Schema } from "mongoose";

interface Amenity {
  _id: mongoose.Types.ObjectId;
}

export interface IHotel {
  id?: string;
  name: string;
  address1: string;
  airportCode: string;
  city?: string;
  countryCode?: string;
  highRate?: number;
  lowRate?: number;
  propertyCategory?: number;
  stateProvinceCode?: string;
  thumbNailUrl?: string;
  gallery?: string[];
  overview?: string;
  amenities?: Amenity[];
}

const hotelSchema = new Schema<IHotel>({
  name: {
    required: true,
    type: String
  },
  address1: {
    required: true,
    type: String
  },
  airportCode: {
    required: true,
    type: String
  },
  city: {
    required: false,
    type: String
  },
  countryCode: {
    required: false,
    type: String
  },
  highRate: {
    required: false,
    type: Number
  },
  lowRate: {
    required: false,
    type: Number
  },
  propertyCategory: {
    required: false,
    type: Number
  },
  stateProvinceCode: {
    required: false,
    type: String
  },
  thumbNailUrl: {
    required: false,
    type: String
  },
  gallery: {
    required: false,
    type: [String]
  },
  overview: {
    required: false,
    type: String
  },
  amenities: {
    required: false,
    type: [{ type: Schema.Types.ObjectId }]
  }
});

export const hotelModel = mongoose.models.hotels ?? mongoose.model<IHotel>("hotels", hotelSchema);
