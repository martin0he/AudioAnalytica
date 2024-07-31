
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




## Screenshots



