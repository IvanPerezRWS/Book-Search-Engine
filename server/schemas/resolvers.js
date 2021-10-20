
const { AuthenticationError } = require('apollo-server-express');
const { User, bookSchema} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__V -password')
                .populate('bookSchema');

                return userData;
            }
            throw new AuthenticationError('Not logged in')
        },
        users: async () => {
            return User.find()
            .select('-__V -password')
            .populate('bookSchema');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__password')
            .populate('bookSchema')
        },
        saveBook: async (parent, { book }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id},
                { $push: { saveBook: book } },
                { new: true }
                );
                return updatedUser;
            }

        throw new AuthenticationError('You need to be logged in to save new book');
        },
        deleteBook: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id},
                    {$pull: { saveBook: { bookId } } },
                    { mew: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
}

module.exports = resolvers