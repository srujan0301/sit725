const mongoose = require('mongoose');
const Project = require('./models/projectModel');

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', async () => {
  console.log('✅ Connected to MongoDB for seeding');

  await Project.deleteMany({});

  const sampleProjects = [
    {
      title: "Kitten 4",
      image: "images/kitten-4.jpg",
      link: "About Kitten 4",
      description: "Demo description about kitten 4"
    },
    {
      title: "Kitten 5",
      image: "images/kitten-5.jpg",
      link: "About Kitten 5",
      description: "Demo description about kitten 5"
    }
  ];

  await Project.insertMany(sampleProjects);
  console.log("🎉 Sample projects saved!");

  mongoose.connection.close();
});
