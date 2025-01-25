# AudioAnalytica

Full-stack web app that uses the Spotify Web API to display relevant data about your listening habits, music tastes, and top artists/tracks/genres/etc.

## Tech Stack

**Client:** React, Typescript, MUI

**Server:** Node, Typescript, Express, Python, Tensorflow

**API:** Spotify Web API

## Authors

- [@Martin Hema](https://www.github.com/martin0he)

## Run Locally

Clone the project

```bash
  git clone https://github.com/martin0he/AudioAnalytica.git
```

Go to the project directory

```bash
  cd AudioAnalytica
```

Install dependencies globally

```bash
  npm install
```

Install dependencies in the frontend directory

```bash
  cd AudioAnalytica/frontend
  npm install
```

Install dependencies in the backend directory

```bash
  cd AudioAnalytica/backend
  npm install
  (as administrator) pip install -r neural_network/requirements.txt
```

Run app (in project directory)

```bash
  npm start
```

## Environment Variables

//NOTE: to run this web app locally you must obtain the necessary credentials from the Spotify Web API developer site first!

To run this project, you will need to add the following environment variables to your .env files:

Backend .env:
`PORT`
`SPOTIFY_CLIENT_ID`
`SPOTIFY_CLIENT_SECRET`
`SPOTIFY_REDIRECT_URI`

Frontend .env:
`REACT_APP_BACKEND_URL`
`SPOTIFY_CLIENT_ID`
`SPOTIFY_REDIRECT_URI`

tip: make sure the `REACT_APP_BACKEND_URL` in the frontend contains the same port number as `PORT` in the backend.

## Demo

![ezgif-7-2edacecac1](https://github.com/user-attachments/assets/e4d840da-bce1-4201-842f-44da48883ceb)

## Screenshots

![image](https://github.com/user-attachments/assets/fc3fab8f-df89-46af-beb6-99bf3b0134bf)
![image](https://github.com/user-attachments/assets/99060cee-06b9-419f-b879-07108e3e8918)
![image](https://github.com/user-attachments/assets/c1dc0105-ae3e-4de6-9153-44cb37a2c906)
![image](https://github.com/user-attachments/assets/31cd20a5-fd51-41b7-a6c9-dbfe9692e57f)
![image](https://github.com/user-attachments/assets/a90d44cd-bbc8-4e04-909a-d893c599e705)
![image](https://github.com/user-attachments/assets/c24f59d1-8741-496d-9ced-38d5c7d421c7)
![image](https://github.com/user-attachments/assets/b7a16f99-0408-490c-8fd8-413f980e5cbb)
![image](https://github.com/user-attachments/assets/b5b71715-2448-427a-8a1c-a1234473c829)
![image](https://github.com/user-attachments/assets/b43433fa-440e-43bf-9fde-cf294e1ebb4a)
![image](https://github.com/user-attachments/assets/b50bed7d-4b0c-4f97-8bfd-715dbdd9a7ce)
