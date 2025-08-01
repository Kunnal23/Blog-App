import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		postId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post",
			required: true,
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		likes: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: "User",
			default: [],
		},
		numberOfLikes: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
