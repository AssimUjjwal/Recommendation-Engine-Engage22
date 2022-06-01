# Movie-Recommendation-Engine-Engage'22-Project
Repository for Challenge - 3 (Algorithms) project made during Microsoft Engage 2022
 
[![Generic badge](https://img.shields.io/badge/Engage-2022-Red.svg?style=for-the-badge)](https://acehacker.com/microsoft/engage2022/index.html) 
[![Generic badge](https://img.shields.io/badge/LinkedIn-Connect-blue.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/assim-ujjwal)
![Generic badge](https://img.shields.io/badge/Heroku-Deployment-orange.svg?style=for-the-badge)

![Generic badge](https://img.shields.io/badge/Python-Language-blue.svg?style=for-the-badge)
![Generic badge](https://img.shields.io/badge/JavaScript-Language-blue.svg?style=for-the-badge)
<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img src="https://img.shields.io/badge/flask%20-%2320232a.svg?&style=for-the-badge&logo=flask&logoColor=%2361DAFB"/>


<br>
<p align="center">
  <a href="https://moviedb-react-assim.herokuapp.com/"><strong>Explore the app here »</strong></a>
</p>

### Challenge - 3 : *ALGORITHMS* 

<br>

<!-- ABOUT THE PROJECT -->
#### **_Problem Description_** : 
<br>
Sorting Algorithms play an important role in recommendation engines. By the end of the project, the following questions should be answered :
- What role is played by sorting algorithms in recommendation engine.
- Which sorting algorithm is used in this project and why?

In this project, i have implemented Recommendation Engine for Movies.


<br><br>
<!-- APPROACH : WHAT AND WHY -->
#### **_Answering the questions_** :
<br>

> Different approaches, choosing an approach and why.
To understand the role of sorting algorithms and make a choice, one should know the different types of filtering algorithms present. They are:
1. Content-based filtering - In this, content is recommended to a user based on the past content-interaction of the same user.
2. Collaborative filtering - In this, content is recommended to a user based on the similarity of that user's content-interaction to another user's content-interaction. Users with similar activities are recommeded similar contents.
3. Hybrid filtering - This is a combination of Content-based and Collaborative filtering.

My objective was to implement an approach that would be :
- relevant to the user (content similarity)
- avoid cold start to the problem
Therefore, content-based filtering approach has been used in this project.

<br><br><br>
## Demo
<br><br><br>
Home

![image](https://user-images.githubusercontent.com/84794183/171406748-99d789af-5203-4f65-ae7f-a0f9b735465c.png)
![image](https://user-images.githubusercontent.com/84794183/171406921-b86cf611-2751-4792-87f3-3af075999a75.png)
![image](https://user-images.githubusercontent.com/84794183/171405950-785edae3-c717-4505-b7db-925d5ae12d27.png)

Movies & TV series catlog

![image](https://user-images.githubusercontent.com/84794183/171407508-7b52b162-24e7-42fd-891c-74c2f5687185.png)
![image](https://user-images.githubusercontent.com/84794183/171407593-6c4427b4-5abc-46ee-8835-e42581f5ac2e.png)

Details

![image](https://user-images.githubusercontent.com/84794183/171406048-12a0faee-d46d-476d-8b64-ac6bf072be42.png)
![image](https://user-images.githubusercontent.com/84794183/171408179-2ebcefae-eadf-444e-8e6a-1f3ea80a39ac.png)
![image](https://user-images.githubusercontent.com/84794183/171408283-e4f5e5d0-216b-40c7-b5f1-d9fd8ca2640f.png)

<br><br>

## Features

Recommendation App has the following features:

- [x] Recommends movies using Content based Recommendation engine.
- [x] Movies and TV shows section.
- [x] Categories wise movies.
- [x] Movies and TV shows details view.
- [x] Search suggestions.
- [x] Movies trailer feature is restricted to sign in.
- [x] Responsiveness to mobile, tablet and pc views.

<!-- PROJECT PLANNING AND TRAJECTORY -->
#### _Selecting the dataset_ :
<br>

> Link to the dataset: https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata/discussion?select=tmdb_5000_movies.csv
> The datasets are also available with this repo, in a folder titled *api_utils*

The following were the factors kept in mind while selecting the dataset :
- Relevant and useful data
- Different and diverse attributes (to facilitate content-based filtering approach)
- Manageable computational load


#### _Project Flow_ :
1. Dataset Analysis
2. Data Pre-processing
3. Model Building (using text vectorization and cosine similarity)
4. Model Testing
5. Establishing web connection (using Reactjs and Flask Api)

## Prerequisites

You must have the following installed:

- [Node.js v12+](https://nodejs.org/en/download/)
- [python v3.10.2](https://www.python.org/downloads/)
  
## Build Instructions

Running the Web App on your Local System
-----------------------------------------

To run the web app in your local device, run the following commands in your terminal:-

Clone the GitHub repository into your local device by running the following command:
```bash
git clone https://github.com/AssimUjjwal/Recommendation-Engine-Engage22
cd Recommendation-Engine-Engage22
```
In the project directory:
  You need to switch on two terminals.
  
Terminal 1:
```bash
cd 'FrontEnd- React'
npm install
npm start
```
  
Terminal 2:
```bash
cd 'BackEnd- Flask'
python -m venv venv
venv/scripts/activate
pip install -r requirements.txt
python app.py
```
  
Then you are good to go!!


[![GitHub repo size](https://img.shields.io/github/repo-size/AssimUjjwal/Recommendation-Engine-Engage22.svg?logo=github&style=social)](https://github.com/aaheli-paul)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/AssimUjjwal/Recommendation-Engine-Engage22.svg?logo=git&style=social)](https://github.com/aaheli-paul/)
