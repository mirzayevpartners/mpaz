import mongoose from 'mongoose';

const formSchema = new mongoose.Schema(
  {
    fullName: String,
    phoneNumber: String,
    emailAddress: String,
    customDate: Date,
    firstTime: Boolean,
  },
  { timestamps: true }
);

export default mongoose.models.Form || mongoose.model('Form', formSchema);
