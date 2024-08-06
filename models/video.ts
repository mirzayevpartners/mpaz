import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema(
  {
    title: String,
    customDate: String,
    videos: [{ src: String, title: String }],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Video || mongoose.model('Video', videoSchema);
