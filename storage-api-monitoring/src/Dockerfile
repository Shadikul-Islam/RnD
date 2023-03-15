FROM python:3.9-slim-buster
WORKDIR /app
COPY . .
RUN apt update
RUN apt install python3-pip -y
RUN pip3 install -e .
RUN pip3 install -e .[dev]
RUN pytest storage/test.py
RUN pip3 install gunicorn
EXPOSE 5000
CMD ["gunicorn", "--workers=4", "--bind=0.0.0.0:5000", "app:app"]