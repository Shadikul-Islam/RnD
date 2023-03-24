FROM python:3.9

# Create a volume for the client data
VOLUME ["/clientdata"]

# Copy the client application code to the container
COPY client.py /app/client.py

# Set the working directory
WORKDIR /app

# Install dependencies
RUN pip install requests

# Run the client application by default
CMD ["python", "client.py", "--server", "server-container:3000"]
