import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    profession: String,
    photo: { src: String, title: String, public_id: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Team || mongoose.model('Team', teamSchema);
