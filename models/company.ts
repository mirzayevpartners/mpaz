import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
  {
    image: { src: String, title: String, public_id: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Company || mongoose.model('Company', companySchema);
