module.exports = {
  webpack: {
    configure: {
      ignoreWarnings: [
        {
          module: /node_modules\/lucide-react/,
        },
      ],
    },
  },
};