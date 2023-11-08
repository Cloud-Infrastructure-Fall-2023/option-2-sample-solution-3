# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip3 install -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV GOOGLE_APPLICATION_CREDENTIALS /app/stunning-agency-398803-64cf472c1d1d.json

# Run app.py when the container launches
ENTRYPOINT ["python3"]
CMD ["mse.py"]
