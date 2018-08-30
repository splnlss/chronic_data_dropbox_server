const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ReviewSchema = mongoose.Schema({
  documentName: { type: String, required: true },
  notes: { type: String, required: true },
  healthProviderName: { type: String, required: false },
  address: { type: String, required: false },
  phone: { type: String, required: false },
  documentURL: { type: String, required: false },
  userName: { type: String, required: true },
  publishedAt: { type: Date, default: new Date() },
});

ReviewSchema.statics.findByDocumentName = function(documentName) {
  return this.where('documentName', documentName);
};

ReviewSchema.methods.serialize = function() {
  return {
    id: this._id,
    documentName: this.documentName,
    notes: this.notes,
    healthProviderName: this.healthProviderName,
    address: this.address,
    phone: this.phone,
    documentURL: this.documentURL,
    userName: this.userName,
    publishedAt: this.publishedAt,
  };
};

const Document = mongoose.model('Document', ReviewSchema);

module.exports = { Document };