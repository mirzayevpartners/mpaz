import mongoose from 'mongoose';

const companyCountsSchema = new mongoose.Schema(
  {
    title: {
      az: String,
      en: String,
      ru: String,
    },
    number: String,
    icon: { src: String, title: String, public_id: String },
  },
  { timestamps: true }
);

export default mongoose.models.CompanyCounts || mongoose.model('CompanyCounts', companyCountsSchema);
