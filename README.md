[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/O804kU8d)

# Course Project – Option 2 Mini Search Engine

This README provides an overview of the project checkpoint.
Team member: Yongjie Yu (yongjiey), Chen Gao (cgao2)

## Building the Front-end Application

Our front-end application serves as an interactive interface for users. It accepts user inputs and displays the corresponding outputs. This application is containerized and deployed using Docker.

### I. Steps to Deploy the Front-end

#### Front-end Application Deployment

Deploying the Front-end Application
We've chosen the React framework to develop our front-end.

1. Code Construction
    - We've developed various components/pages for the application: `HomePage.js`, `ErrorPage.js`, `ResultsPage.js`, `SearchPage.js`, `SearchByTerm.js`, `SearchByTopN.js`, and `SearchByTopN.js`.
2. Initialization & Starting the App
    - Execute `npm install` to install dependencies.
    - Launch the app using `npm start`.
    - You should see the front-end application running as shown below:
    ![image](https://github.com/Cloud-Infrastructure-Fall-2023/course-project-option-2-Ukie555/blob/main/Screenshots/checkpoint/frontend.png)

#### Building the Docker Container for the Front-end

1. Image Creation
    - Build the Image: `docker build -t dockerHubId/mse-frontend:latest`
    This is the Dockerfile.

    ```dockerfile
    FROM nginx
    COPY build /usr/share/nginx/html
    ```

2. Run the Docker Image
    - Use `docker run --name mse-frontend -p 80:80 0d mse-frontend`
3. Push the Docker Image to Docker Hub
    - Push the image with `docker push dockerHubId/mse-frontend:latest`
    - Website: <https://hub.docker.com/r/ukie555/mse-frontend>

### II. Front-end Screenshot

1. Homepage
![image](https://github.com/Cloud-Infrastructure-Fall-2023/course-project-option-2-Ukie555/blob/main/Screenshots/checkpoint/homepage.png)

2. Upload File
![image](https://github.com/Cloud-Infrastructure-Fall-2023/course-project-option-2-Ukie555/blob/main/Screenshots/checkpoint/upload_success.png)

3. Search by Term
![image](https://github.com/Cloud-Infrastructure-Fall-2023/course-project-option-2-Ukie555/blob/main/Screenshots/checkpoint/search_term.png)

4. Search by Top-N
![image](https://github.com/Cloud-Infrastructure-Fall-2023/course-project-option-2-Ukie555/blob/main/Screenshots/checkpoint/search_topn.png)

## Build Back-end Application

The back-end application processes the requests sent by the front-end.
Currently, its primary function is file uploads.
We plan to implement the inverting indices algorithm soon and enable the search through these indices, as well as facilitating the retrieval of the Top-N frequent terms from these indices.

### I. Steps to Deploy the Back-end

We've opted for the Flask framework for our back-end development.

1. Code Implementation
    - File: `mse.py`.
2. Initialization & Starting the App
    - Run the backend using `python3 mse.py`.
    - Upon successful startup, you should see the back-end application running as shown below:
    ![image](https://github.com/Cloud-Infrastructure-Fall-2023/course-project-option-2-Ukie555/blob/main/Screenshots/checkpoint/backend.png)
