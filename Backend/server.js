const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const FAQ = require("./models/question"); // Ensure this model exists
const Product = require('./models/product');
const Service = require('./models/service');
const Job = require('./models/Job');
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
}));

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.get("/api/ans", async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching FAQs" });
  }
});

// POST new FAQ
app.post("/api/faqs", async (req, res) => {
  console.log(req.body);
  try {
    const { question, answer } = req.body;
    const newFAQ = new FAQ({ question, answer });
    await newFAQ.save();
    res.status(201).json({ message: "FAQ added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding FAQ" });
  }
});

app.post('/api/products', async (req, res) => {
  const { title, description, image_url } = req.body;
  
  try {
    const newProduct = new Product({ title, description, image_url });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully!', product: newProduct });
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).json({ error: 'Failed to add product' });
  }
});

app.post('/api/services', async (req, res) => {
  const { title, description, image_url } = req.body;
  
  try {
    const newService = new Service({ title, description, image_url });
    await newService.save();
    res.status(201).json({ message: 'Service added successfully!', Service: newService });
  } catch (err) {
    console.error('Error adding Service:', err);
    res.status(500).json({ error: 'Failed to add service' });
  }
});

app.get("/api/pds", async (req, res) => {
  try {
    const pds = await Product.find();
    res.json(pds);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
});

app.get("/api/svs", async (req, res) => {
  try {
    const svs = await Service.find();
    res.json(svs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services" });
  }
});
 
// Update a product by ID
app.put('/api/products/:id', async (req, res) => {
  const { title, description, image_url } = req.body;
  const productId = req.params.id;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { title, description, image_url },
      { new: true }
    );
    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Update a service by ID
app.put('/api/services/:id', async (req, res) => {
  const { title, description, image_url } = req.body;
  const serviceId = req.params.id;

  try {
    const updatedService = await Service.findByIdAndUpdate(
      serviceId,
      { title, description, image_url },
      { new: true } // The `new` option ensures the updated document is returned
    );

    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({
      message: "Service updated successfully",
      service: updatedService,
    });
  } catch (err) {
    console.error('Error updating service:', err);
    res.status(500).json({ error: 'Failed to update service' });
  }
});


// DELETE product by ID
app.delete('/api/products/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

app.delete('/api/services/:id', async (req, res) => {
  const serviceId = req.params.id;
  
  try {
    const deletedService = await Service.findByIdAndDelete(serviceId);
    
    if (!deletedService) {
      return res.status(404).json({ message: 'Service not found' });
    }
    
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single job by ID
app.get("/api/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new job
app.post("/api/carry", async (req, res) => {
  console.log(req.body);
  const { title, description, tags } = req.body;
  const newJob = new Job({ title, description, tags });
  try {
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a job
app.put("/api/jobs/:id", async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a job
app.delete("/api/jobs/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
