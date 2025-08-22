import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 100 },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  phone: { type: String, required: true },
  location: { type: String, required: true, maxlength: 255 },
  tvSize: { type: String, required: true },
  wallType: { type: String, required: true },
  hasBracket: { type: String, required: true, enum: ["yes", "no"] },
  bracketType: { type: String, required: true },
  message: { type: String, maxlength: 500 },
  submittedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);
