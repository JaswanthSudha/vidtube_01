import mongoose, { Schema } from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';
const CommentSchema = new Schema(
	{
		video: {
			type: Schema.Types.ObjectId,
			ref: 'Video',
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		content: { type: String, required: true },
	},
	{ timeseries: true },
);
CommentSchema.plugin(mongooseAggregatePaginate);
export const CommentModel = mongoose.model('Comment', CommentSchema);
